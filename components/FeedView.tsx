import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { db } from '../firebaseService';
import { Post, User, Story } from '../types';
import PostCard from './PostCard';
import AddStoryModal from './AddStoryModal';
import StoryViewer from './StoryViewer';
import { FaPlus, FaFilter, FaLayerGroup, FaImage, FaBookmark } from 'react-icons/fa6';

// TARİH FORMATLAMA FONKSİYONU (DÜZELTİLDİ)
// Not: Bu fonksiyon FeedView içindeki direkt kullanımlar içindir.
// Eğer PostCard içinde tarih kullanılıyorsa, bu fonksiyonu PostCard.tsx'e de kopyalamalısınız.
export const formatTime = (timestamp: any) => {
    if (!timestamp) return '';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 0) return 'Az önce';
    if (diffInSeconds < 60) return 'Az önce';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} dk önce`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} saat önce`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} gün önce`;
    
    return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' });
};

interface FeedViewProps {
  user: User;
  onCommentClick: (post: Post) => void;
}

const FeedView: React.FC<FeedViewProps> = ({ user, onCommentClick }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [stories, setStories] = useState<Story[]>([]);
  const [filter, setFilter] = useState<'all' | 'media' | 'saved'>('all');
  
  // Story States
  const [showAddStory, setShowAddStory] = useState(false);
  const [viewingStory, setViewingStory] = useState<Story | null>(null);

  useEffect(() => {
    // Listen for posts
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"), limit(50));
    const unsub = onSnapshot(q, (snap) => {
      const p: Post[] = [];
      snap.forEach(d => p.push({ ...d.data(), id: d.id } as Post));
      setPosts(p);
    });
    return () => unsub();
  }, []);

  // Storyleri dinle
  useEffect(() => {
    // Son 24 saat
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const q = query(
        collection(db, "stories"), 
        orderBy("timestamp", "desc")
        // Gerçek uygulamada: where("timestamp", ">", twentyFourHoursAgo) eklenmeli
        // Şimdilik hepsi gelsin
    );
    const unsub = onSnapshot(q, (snap) => {
        const s: Story[] = [];
        snap.forEach(d => s.push({ ...d.data(), id: d.id } as Story));
        setStories(s);
    });
    return () => unsub();
  }, []);

  const filteredPosts = posts.filter(post => {
      if (filter === 'media') return post.image;
      if (filter === 'saved') return post.likes?.includes(user.uid); // Basitçe beğendiklerim olarak simüle edildi
      return true;
  });

  return (
    <div className="flex flex-col h-full bg-black no-scrollbar pb-24">
      
      {/* Stories & Filter Header */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-white/5 pb-2">
          {/* Stories Bar */}
          <div className="p-4 overflow-x-auto no-scrollbar flex items-center gap-4">
              {/* Add Story Button */}
              <div className="flex flex-col items-center gap-1 cursor-pointer" onClick={() => setShowAddStory(true)}>
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-primary/50 flex items-center justify-center relative hover:bg-white/5 transition-colors">
                      <FaPlus className="text-primary text-xl" />
                      <div className="absolute bottom-0 right-0 bg-primary rounded-full p-1 text-[10px] border border-black">
                          <FaPlus className="text-white" />
                      </div>
                  </div>
                  <span className="text-xs text-gray-400">Hikaye Ekle</span>
              </div>

              {/* Stories List */}
              {stories.map(story => (
                  <div key={story.id} className="flex flex-col items-center gap-1 cursor-pointer" onClick={() => setViewingStory(story)}>
                      <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-primary to-accent animate-spin-slow">
                          <img 
                              src={story.userPhoto} 
                              alt={story.userName} 
                              className="w-full h-full rounded-full border-2 border-black object-cover"
                          />
                      </div>
                      <span className="text-xs text-gray-300 w-16 truncate text-center">{story.userName}</span>
                  </div>
              ))}
          </div>

          {/* Filters */}
          <div className="px-4 flex items-center gap-2 overflow-x-auto no-scrollbar">
              <FilterChip 
                  icon={<FaLayerGroup />} 
                  label="Tümü" 
                  active={filter === 'all'} 
                  onClick={() => setFilter('all')} 
              />
              <FilterChip 
                  icon={<FaImage />} 
                  label="Medya" 
                  active={filter === 'media'} 
                  onClick={() => setFilter('media')} 
              />
              <FilterChip 
                  icon={<FaBookmark />} 
                  label="Kaydedilenler" 
                  active={filter === 'saved'} 
                  onClick={() => setFilter('saved')} 
              />
          </div>
      </div>

      {/* Posts Feed */}
      <div className="flex-1 overflow-y-auto no-scrollbar p-4">
        <div className="flex flex-col gap-6 max-w-2xl mx-auto">
          {filteredPosts.map((post) => (
            <PostCard 
              key={post.id} 
              post={post} 
              currentUserUid={user.uid} 
              onCommentClick={() => onCommentClick(post)} 
            />
          ))}
          {filteredPosts.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 opacity-50 space-y-4">
                  <div className="text-5xl animate-bounce grayscale opacity-50">🛰️</div>
                  <div className="text-sm font-light tracking-widest text-gray-500">AKIŞ BOŞ</div>
              </div>
          )}
        </div>
      </div>

      {/* Story Modals */}
      {showAddStory && <AddStoryModal user={user} onClose={() => setShowAddStory(false)} />}
      {viewingStory && <StoryViewer story={viewingStory} onClose={() => setViewingStory(null)} />}

    </div>
  );
};

const FilterChip: React.FC<{ icon: React.ReactNode, label: string, active: boolean, onClick: () => void }> = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-bold transition-all duration-300 whitespace-nowrap border backdrop-blur-md ${
        active 
        ? 'bg-primary text-white border-primary shadow-[0_0_15px_rgba(124,58,237,0.4)] scale-105' 
        : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10'
    }`}
  >
    {icon}
    {label}
  </button>
);

export default FeedView;
```

### Önemli Not (Gönderiler İçin)

Yukarıdaki `ChatView.tsx` dosyası mesajlardaki sorunları tamamen çözer.

Ancak **Gönderiler (PostCard)** için `FeedView.tsx` dosyasında yaptığım değişiklik yeterli olmayabilir çünkü tarih muhtemelen **`src/components/PostCard.tsx`** dosyasının içinde yazılıyor. O dosyayı yüklemediğiniz için onu düzeltemedim.

Eğer gönderilerde hala "Az önce" sorunu varsa, lütfen **`PostCard.tsx`** dosyasını açın ve içindeki `formatTime` (veya tarih yazan kısmı) aşağıdaki kodla değiştirin:

```javascript
// PostCard.tsx içine yapıştırmanız gereken tarih kodu:
const formatTime = (timestamp: any) => {
    if (!timestamp) return '';
    // Bu satır çok önemli: .toDate() varsa onu kullanır yoksa direkt çevirir
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    // ... geri kalan mantık aynı (yukarıdaki dosyalardaki gibi)
};
