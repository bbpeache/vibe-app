import React from 'react';
import { User } from '../types';
import { auth } from '../firebaseService';
import { FaGraduationCap } from 'react-icons/fa6';

interface ProfileViewProps {
  user: User;
  isMe: boolean;
}

const ProfileView: React.FC<ProfileViewProps> = ({ user, isMe }) => {
  const themeColor = user.themeColor || '#7C3AED';
  const hexToRgba = (hex: string, alpha: number) => {
    // Simple hex to rgba
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div className="h-full overflow-y-auto no-scrollbar pb-24 animate-fade-in">
      <div 
        className="pt-10 pb-6 px-4 rounded-b-[30px] border-b border-white/5 text-center relative transition-colors duration-500"
        style={{ background: `linear-gradient(to bottom, ${hexToRgba(themeColor, 0.2)}, transparent)` }}
      >
         <div className="relative inline-block">
            <img 
            src={user.avatar} 
            className="w-24 h-24 rounded-full border-4 mx-auto mb-4 bg-black object-cover"
            style={{ borderColor: themeColor, boxShadow: `0 0 30px ${hexToRgba(themeColor, 0.3)}` }}
            />
            {user.goldBadge && (
                <div className="absolute -right-2 -bottom-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-[9px] font-black px-2 py-0.5 rounded shadow-lg">VIBE</div>
            )}
         </div>
         
         <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
           {user.username}
           {user.verified && <span className="text-sm" style={{color: themeColor}}>✓</span>}
         </h2>
         
         {/* University Info */}
         {(user.university || user.department) && (
             <div 
                className="flex items-center justify-center gap-2 text-sm mt-1 font-medium bg-white/5 w-fit mx-auto px-3 py-1 rounded-full border border-white/10 mb-2"
                style={{ color: themeColor }}
             >
                 <FaGraduationCap />
                 <span>{[user.university, user.department].filter(Boolean).join(' • ')}</span>
             </div>
         )}

         <p className="text-gray-400 text-sm mt-1 max-w-[80%] mx-auto">{user.bio || 'VIBE User'}</p>
         
         <div className="flex justify-center gap-8 mt-6 bg-white/5 mx-auto w-fit px-6 py-3 rounded-2xl border border-white/5">
            <div className="text-center">
                <div className="text-xl font-bold" style={{ color: themeColor }}>{user.postCount || 0}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">Post</div>
            </div>
            <div className="text-center">
                <div className="text-xl font-bold text-white">42</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider">Takipçi</div>
            </div>
         </div>
      </div>

      <div className="p-4">
        {isMe && (
            <button 
                onClick={() => auth.signOut()}
                className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-red-400 font-semibold hover:bg-red-500/10 transition-colors"
            >
                Çıkış Yap
            </button>
        )}
      </div>
    </div>
  );
};

export default ProfileView;