import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { db } from '../firebaseService';
import { Post, User, Story } from '../types';
import PostCard from './PostCard';
import AddStoryModal from './AddStoryModal';
import StoryViewer from './StoryViewer';
import { FaPlus } from 'react-icons/fa6';

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

    // Listen for stories
    const qStories = query(collection(db, "stories"), orderBy("timestamp", "desc"), limit(20));
    const unsubStories = onSnapshot(qStories, (snap) => {
        const s: Story[] = [];
        snap.forEach(d => s.push({ ...d.data(), id: d.id } as Story));
        setStories(s);
    });

    return () => { unsub(); unsubStories(); };
  }, []);

  const filteredPosts = posts.filter(p => {
    if (filter === 'media') return p.content.includes('http') || p.image;
    return true;
  });

  return (
    <div className="flex flex-col h-full bg-black pb-24">
      {/* Stories Rail - Adjusted Aspect Ratio & Spacing */}
      <div className="shrink-0 w-full overflow-x-auto no-scrollbar pt-3 pb-2 border-b border-white/5 bg-surface/30 backdrop-blur-sm z-10">
        <div className="flex gap-3 px-4 items-start">
          {/* Add Story Button */}
          <div 
            onClick={() => setShowAddStory(true)}
            className="flex flex-col items-center gap-1 shrink-0 cursor-pointer group"
          >
            <div className="w-[60px] h-[60px] rounded-full border border-dashed border-gray-500 flex items-center justify-center bg-white/5 group-hover:border-primary transition-colors relative">
              <FaPlus className="text-primary text-xl" />
              <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform" />
            </div>
            <span className="text-[10px] text-gray-400 font-medium">Ekle</span>
          </div>

          {/* Stories List */}
          {stories.map((story) => (
             <div 
                key={story.id} 
                onClick={() => setViewingStory(story)}
                className="flex flex-col items-center gap-1 shrink-0 cursor-pointer group"
             >
               <div className="w-[60px] h-[60px] rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 group-hover:scale-105 transition-transform">
                 <div className="w-full h-full rounded-full border-2 border-black overflow-hidden relative bg-gray-800">
                   <img 
                     src={story.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${story.uid}`} 
                     alt={story.username} 
                     className="w-full h-full object-cover"
                   />
                 </div>
               </div>
               <span className="text-[10px] text-gray-300 w-14 truncate text-center">{story.username}</span>
             </div>
          ))}
        </div>
      </div>

      {/* Filter Categories - More compact */}
      <div className="shrink-0 px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar bg-black/50 sticky top-0 z-10 backdrop-blur-md">
        <FilterChip label="Tümü" active={filter === 'all'} onClick={() => setFilter('all')} />
        <FilterChip label="Medya" active={filter === 'media'} onClick={() => setFilter('media')} />
        <FilterChip label="Kaydedilenler" active={filter === 'saved'} onClick={() => setFilter('saved')} />
      </div>

      {/* Posts List */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-2 pt-2">
        {filteredPosts.map(post => (
          <PostCard 
            key={post.id} 
            post={post} 
            currentUserUid={user.uid} 
            onCommentClick={() => onCommentClick(post)} 
          />
        ))}
        {filteredPosts.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 opacity-50">
                <div className="text-4xl mb-2">📭</div>
                <div className="text-sm">Henüz gönderi yok.</div>
            </div>
        )}
      </div>

      {/* Story Modals */}
      {showAddStory && <AddStoryModal user={user} onClose={() => setShowAddStory(false)} />}
      {viewingStory && <StoryViewer story={viewingStory} onClose={() => setViewingStory(null)} />}

    </div>
  );
};

const FilterChip: React.FC<{ label: string, active: boolean, onClick: () => void }> = ({ label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`px-4 py-1.5 rounded-full text-[12px] font-medium transition-all whitespace-nowrap border ${active ? 'bg-primary border-primary text-white shadow-[0_0_10px_rgba(124,58,237,0.4)]' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
  >
    {label}
  </button>
);

export default FeedView;