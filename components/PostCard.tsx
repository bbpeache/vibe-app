import React, { useState } from 'react';
import { Post } from '../types';
import { FaHeart, FaRegHeart, FaRegComment, FaRegBookmark, FaShareNodes, FaTrash, FaCircleCheck, FaGraduationCap } from 'react-icons/fa6';
import { doc, updateDoc, increment, deleteDoc } from "firebase/firestore";
import { db } from '../firebaseService';

interface PostCardProps {
  post: Post;
  currentUserUid: string;
  onCommentClick: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, currentUserUid, onCommentClick }) => {
  const [liked, setLiked] = useState(false); // Local optimisitic state
  const [likesCount, setLikesCount] = useState(post.likes || 0);

  const toggleLike = async () => {
    const newVal = !liked;
    setLiked(newVal);
    setLikesCount(prev => newVal ? prev + 1 : prev - 1);
    
    // Update Firebase
    const ref = doc(db, "posts", post.id);
    await updateDoc(ref, { likes: increment(newVal ? 1 : -1) });
  };

  const handleDelete = async () => {
      if(window.confirm("Bu gönderiyi silmek istediğine emin misin?")) {
          await deleteDoc(doc(db, "posts", post.id));
      }
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl p-4 mb-3 relative overflow-hidden group transition-all hover:bg-white/[0.07]">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-3">
          <img 
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.uid}`} 
            alt="avatar" 
            className="w-10 h-10 rounded-full border border-white/10 bg-gray-800 object-cover"
          />
          <div>
            <div className="flex items-center gap-1">
              <h4 className="font-bold text-[15px]">{post.username}</h4>
              {post.verified && <FaCircleCheck className="text-accent text-xs" />}
              {post.goldBadge && <span className="text-[9px] bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-1.5 py-0.5 rounded font-black">VIBE</span>}
            </div>
            
            {/* University & Department Line */}
            {(post.userUniversity || post.userDepartment) && (
              <div className="flex items-center gap-1 text-[11px] text-accent/80 font-medium my-0.5">
                  <FaGraduationCap />
                  <span className="truncate max-w-[200px]">
                      {[post.userUniversity, post.userDepartment].filter(Boolean).join(' • ')}
                  </span>
              </div>
            )}

            {!post.userUniversity && !post.userDepartment && (
               <span className="text-xs text-gray-500">Az önce</span>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
            {(post.userUniversity || post.userDepartment) && <span className="text-xs text-gray-500">Az önce</span>}
            {/* Delete Button (Only for owner) */}
            {post.uid === currentUserUid && (
                <button 
                    onClick={handleDelete}
                    className="text-gray-600 hover:text-red-500 p-2 transition-colors"
                    title="Sil"
                >
                    <FaTrash size={12} />
                </button>
            )}
        </div>
      </div>

      <div className="text-[15px] text-gray-200 leading-relaxed mb-3 whitespace-pre-wrap break-words">
        {post.content}
      </div>

      {/* Render Image if exists */}
      {post.image && (
          <div className="mb-3 rounded-lg overflow-hidden border border-white/5 bg-black/20">
              <img src={post.image} alt="Post content" className="w-full h-auto max-h-[400px] object-cover" loading="lazy" />
          </div>
      )}

      {post.signature && (
          <div className="text-[11px] text-gray-500 italic mb-3 opacity-60">
              {post.signature}
          </div>
      )}

      <div className="flex items-center justify-between pt-3 border-t border-white/5">
        <div className="flex gap-6">
          <button onClick={toggleLike} className={`flex items-center gap-2 text-sm transition-colors ${liked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}>
            {liked ? <FaHeart /> : <FaRegHeart />}
            <span>{likesCount}</span>
          </button>
          
          <button 
            onClick={onCommentClick}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors"
          >
            <FaRegComment />
            <span>{post.commentCount || 0}</span>
          </button>
          
          <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors">
            <FaRegBookmark />
          </button>
        </div>
        <button className="text-gray-400 hover:text-white transition-colors">
            <FaShareNodes />
        </button>
      </div>
    </div>
  );
};

export default PostCard;