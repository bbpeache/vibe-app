import React, { useEffect, useState } from 'react';
import { Story } from '../types';
import { FaXmark } from 'react-icons/fa6';

interface StoryViewerProps {
  story: Story;
  onClose: () => void;
}

const StoryViewer: React.FC<StoryViewerProps> = ({ story, onClose }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
        setProgress(old => {
            if(old >= 100) {
                clearInterval(timer);
                onClose();
                return 100;
            }
            return old + 2; // 50ms * 50 = 2500ms approx, adjusted for 5s total
        });
    }, 100); // Update every 100ms
    return () => clearInterval(timer);
  }, [onClose]);

  return (
    <div className="absolute inset-0 z-[200] bg-black flex flex-col animate-fade-in">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-white/20 z-30">
            <div className="h-full bg-white transition-all duration-100 ease-linear" style={{ width: `${progress}%` }}></div>
        </div>

        {/* Header */}
        <div className="absolute top-4 left-4 z-30 flex items-center gap-3">
            <img src={story.avatar} className="w-10 h-10 rounded-full border-2 border-primary" />
            <span className="font-bold text-white drop-shadow-md">{story.username}</span>
            <span className="text-white/70 text-xs drop-shadow-md">Az önce</span>
        </div>

        <button onClick={onClose} className="absolute top-4 right-4 z-30 text-white p-2 bg-black/20 rounded-full backdrop-blur-sm">
            <FaXmark size={20} />
        </button>

        {/* Content */}
        <div 
            className={`flex-1 flex items-center justify-center relative p-6 bg-gradient-to-br ${story.color || 'from-gray-900 to-black'}`}
            onClick={() => onClose()}
        >
             {story.image && (
                 <>
                    <img src={story.image} className="absolute inset-0 w-full h-full object-cover opacity-40 blur-lg scale-110" />
                    <img src={story.image} className="relative z-10 max-h-full max-w-full rounded-lg shadow-2xl" />
                 </>
             )}
             
             {story.text && (
                 <div className={`relative z-20 text-center font-bold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] ${story.image ? 'absolute bottom-20 text-2xl bg-black/50 p-4 rounded-xl backdrop-blur-sm' : 'text-3xl'}`}>
                     {story.text}
                 </div>
             )}
        </div>
    </div>
  );
};

export default StoryViewer;