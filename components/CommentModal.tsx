import React, { useState, useEffect } from 'react';
import { Post, User, Comment } from '../types';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp, doc, updateDoc, increment } from "firebase/firestore";
import { db } from '../firebaseService';
import { FaXmark, FaPaperPlane } from 'react-icons/fa6';

interface CommentModalProps {
  post: Post;
  currentUser: User;
  onClose: () => void;
}

const CommentModal: React.FC<CommentModalProps> = ({ post, currentUser, onClose }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    // Reference comments sub-collection
    const commentsRef = collection(db, "posts", post.id, "comments");
    const q = query(commentsRef, orderBy("timestamp", "asc"));
    
    const unsub = onSnapshot(q, (snap) => {
        const c: Comment[] = [];
        snap.forEach(d => c.push({ ...d.data(), id: d.id } as Comment));
        setComments(c);
    });
    return () => unsub();
  }, [post.id]);

  const handleSend = async () => {
      if(!text.trim() || sending) return;
      setSending(true);
      try {
          // Add comment to subcollection
          await addDoc(collection(db, "posts", post.id, "comments"), {
              uid: currentUser.uid,
              username: currentUser.username,
              avatar: currentUser.avatar,
              text: text,
              timestamp: serverTimestamp()
          });

          // Update main post comment count
          await updateDoc(doc(db, "posts", post.id), {
              commentCount: increment(1)
          });
          
          setText("");
      } catch(e) {
          console.error(e);
      } finally {
          setSending(false);
      }
  };

  return (
    <div className="absolute inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-end sm:items-center justify-center animate-fade-in">
        <div className="w-full h-[80%] sm:h-[600px] sm:max-w-md bg-surface border-t sm:border border-white/10 rounded-t-3xl sm:rounded-3xl flex flex-col relative overflow-hidden animate-slide-up shadow-2xl">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-10">
                <h3 className="text-lg font-bold">Yorumlar</h3>
                <button onClick={onClose} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10">
                    <FaXmark />
                </button>
            </div>

            {/* Comments List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {comments.length === 0 && <div className="text-center text-gray-500 mt-10">İlk yorumu sen yap!</div>}
                
                {comments.map(comment => (
                    <div key={comment.id} className="flex gap-3">
                         <img src={comment.avatar} className="w-8 h-8 rounded-full bg-gray-800 object-cover shrink-0" />
                         <div className="flex flex-col">
                             <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none">
                                 <span className="font-bold text-xs text-primary block mb-1">{comment.username}</span>
                                 <p className="text-sm text-gray-200">{comment.text}</p>
                             </div>
                             <span className="text-[10px] text-gray-500 ml-2 mt-1">Az önce</span>
                         </div>
                    </div>
                ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10 bg-black/80 pb-6 sm:pb-3">
                <div className="flex items-center gap-2 bg-white/5 rounded-full px-2 py-1 border border-white/5">
                    <input 
                        type="text" 
                        value={text}
                        onChange={e => setText(e.target.value)}
                        placeholder="Yorum ekle..."
                        className="flex-1 bg-transparent px-4 py-3 outline-none text-white placeholder-gray-500 text-sm"
                        onKeyDown={e => e.key === 'Enter' && handleSend()}
                    />
                    <button 
                        onClick={handleSend}
                        disabled={!text.trim() || sending}
                        className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white shadow-neon disabled:opacity-50"
                    >
                        <FaPaperPlane size={12} />
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CommentModal;