import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { db } from '../firebaseService';
import { Post, User, Story } from '../types';
import PostCard from './PostCard';
import AddStoryModal from './AddStoryModal';
import StoryViewer from './StoryViewer';
import { FaPlus, FaFilter, FaLayerGroup, FaImage, FaBookmark } from 'react-icons/fa6';

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
        
        {/* Stories Section - Enhanced UI */}
        <div className="w-full pt-4 pb-2 bg-gradient-to-b from-surface/80 to-transparent backdrop-blur-sm sticky top-0 z-30">
          <div className="flex gap-4 px-4 overflow-x-auto no-scrollbar pb-4 items-center">
            
            {/* Add Story Button */}
            <div 
              onClick={() => setShowAddStory(true)}
              className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer group relative"
            >
              <div className="w-[68px] h-[68px] rounded-full p-[2px] border-2 border-dashed border-gray-700 group-hover:border-primary transition-all duration-300 flex items-center justify-center relative">
                 <div className="w-full h-full rounded-full bg-surface flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <FaPlus className="text-primary text-lg group-hover:scale-110 transition-transform" />
                 </div>
                 <div className="absolute bottom-0 right-0 bg-primary w-5 h-5 rounded-full flex items-center justify-center border-2 border-black text-white text-[10px]">
                    <FaPlus />
                 </div>
              </div>
              <span className="text-[10px] text-gray-400 font-medium tracking-wide group-hover:text-primary transition-colors">Hikayem</span>
            </div>

            {/* Stories List */}
            {stories.map((story) => (
               <div 
                  key={story.id} 
                  onClick={() => setViewingStory(story)}
                  className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer group"
               >
                 <div className="w-[68px] h-[68px] rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-primary group-hover:scale-105 transition-all duration-300 shadow-[0_0_10px_rgba(236,72,153,0.3)]">
                   <div className="w-full h-full rounded-full border-[2px] border-black overflow-hidden bg-gray-900 relative">
                     <img 
                       src={story.image || story.avatar} 
                       alt={story.username} 
                       className="w-full h-full object-cover"
                     />
                   </div>
                 </div>
                 <span className="text-[10px] text-gray-300 w-[70px] truncate text-center font-medium opacity-80 group-hover:opacity-100 group-hover:text-white transition-all">
                    {story.username}
                 </span>
               </div>
            ))}
          </div>
        </div>

        {/* Filter Categories - Glassmorphism Chips */}
        <div className="sticky top-[105px] z-20 px-4 py-2 flex items-center gap-2 overflow-x-auto no-scrollbar mask-linear-fade">
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

        {/* Posts List */}
        <div className="px-2 space-y-4 pt-2">
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
        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20 hover:text-white'
    }`}
  >
    <span className={active ? 'text-white' : 'text-gray-500'}>{icon}</span>
    {label}
  </button>
);

export default FeedView;