import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { db } from '../firebaseService';
import { Post, User, Story } from '../types';
import PostCard from './PostCard';
import AddStoryModal from './AddStoryModal';
import StoryViewer from './StoryViewer';
import { FaPlus, FaFilter } from 'react-icons/fa6';

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
    <div className="flex flex-col h-full bg-black">
      {/* Main Scroll Container */}
      <div className="flex-1 overflow-y-auto no-scrollbar pb-24 relative">
        
        {/* Stories Section */}
        <div className="w-full py-4 bg-gradient-to-b from-surface to-black/0 border-b border-white/5">
          <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar pb-2 items-start">
            
            {/* Add Story Button */}
            <div 
              onClick={() => setShowAddStory(true)}
              className="flex flex-col items-center gap-2 shrink-0 cursor-pointer group relative"
            >
              <div className="w-[72px] h-[72px] rounded-full p-[2px] border-2 border-dashed border-gray-600 group-hover:border-primary transition-colors flex items-center justify-center relative overflow-hidden">
                 <div className="w-full h-full rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FaPlus className="text-primary text-xl" />
                 </div>
              </div>
              <span className="text-[11px] text-gray-400 font-medium tracking-wide">Hikaye Ekle</span>
              {/* Pulsing effect */}
              <div className="absolute top-1 right-1 w-3 h-3 bg-primary rounded-full animate-ping opacity-75"></div>
            </div>

            {/* Stories List */}
            {stories.map((story) => (
               <div 
                  key={story.id} 
                  onClick={() => setViewingStory(story)}
                  className="flex flex-col items-center gap-2 shrink-0 cursor-pointer group"
               >
                 <div className="w-[72px] h-[72px] rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                   <div className="w-full h-full rounded-full border-2 border-black overflow-hidden bg-gray-900">
                     <img 
                       src={story.image || story.avatar} 
                       alt={story.username} 
                       className="w-full h-full object-cover"
                     />
                   </div>
                 </div>
                 <span className="text-[11px] text-gray-300 w-[74px] truncate text-center font-medium opacity-80 group-hover:opacity-100 group-hover:text-white transition-all">
                    {story.username}
                 </span>
               </div>
            ))}
          </div>
        </div>

        {/* Filter Categories - Sticky Header with Glassmorphism */}
        <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/5 py-3 px-4 flex items-center gap-3 overflow-x-auto no-scrollbar shadow-lg mb-4">
          <div className="text-gray-500 shrink-0"><FaFilter size={12} /></div>
          <FilterChip label="Tümü" active={filter === 'all'} onClick={() => setFilter('all')} />
          <FilterChip label="Medya" active={filter === 'media'} onClick={() => setFilter('media')} />
          <FilterChip label="Kaydedilenler" active={filter === 'saved'} onClick={() => setFilter('saved')} />
        </div>

        {/* Posts List */}
        <div className="px-2 space-y-4">
          {filteredPosts.map(post => (
            <PostCard 
              key={post.id} 
              post={post} 
              currentUserUid={user.uid} 
              onCommentClick={() => onCommentClick(post)} 
            />
          ))}
          {filteredPosts.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 opacity-50 space-y-4">
                  <div className="text-5xl animate-bounce">🛸</div>
                  <div className="text-sm font-light tracking-widest text-gray-400">SİNYAL YOK</div>
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

const FilterChip: React.FC<{ label: string, active: boolean, onClick: () => void }> = ({ label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`px-5 py-1.5 rounded-full text-[12px] font-bold transition-all duration-300 whitespace-nowrap border backdrop-blur-md ${
        active 
        ? 'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(124,58,237,0.3)]' 
        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20 hover:text-white'
    }`}
  >
    {label}
  </button>
);

export default FeedView;