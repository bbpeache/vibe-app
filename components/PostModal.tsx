import React, { useState, useRef } from 'react';
import { User } from '../types';
import { collection, addDoc, serverTimestamp, updateDoc, doc, increment } from "firebase/firestore";
import { db } from '../firebaseService';
import { FaXmark, FaImage, FaTrash } from 'react-icons/fa6';

interface PostModalProps {
  user: User;
  onClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ user, onClose }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 500 * 1024) {
          alert("Resim boyutu çok büyük! Lütfen daha küçük bir resim seçin.");
          return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
           setImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if ((!content.trim() && !image) || sending) return;
    setSending(true);
    try {
      // 1. Create Post
      await addDoc(collection(db, "posts"), {
        uid: user.uid,
        username: user.username,
        content: content,
        image: image,
        likes: 0,
        commentCount: 0,
        verified: user.verified || false,
        goldBadge: user.goldBadge || false,
        // Add Educational Info
        userUniversity: user.university || null,
        userDepartment: user.department || null,
        signature: user.postCount ? `User #${user.uid.slice(0,5)}` : '',
        timestamp: serverTimestamp()
      });
      
      // 2. Update User Stats
      await updateDoc(doc(db, "users", user.uid), { postCount: increment(1) });

      // 3. Create Notification (Global for demo)
      await addDoc(collection(db, "notifications"), {
          type: 'post',
          uid: user.uid,
          username: user.username,
          avatar: user.avatar,
          message: `${user.username} yeni bir gönderi VIBEladı.`,
          timestamp: serverTimestamp(),
          read: false
      });

      onClose();
    } catch (e) {
      console.error(e);
      alert("Hata oluştu.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="absolute inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full h-full max-w-md bg-surface border border-white/10 rounded-2xl flex flex-col relative overflow-hidden animate-slide-up shadow-2xl">
        <div className="flex justify-between items-center p-4 border-b border-white/10">
          <h3 className="text-lg font-bold">Yeni Gönderi</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10">
            <FaXmark />
          </button>
        </div>
        
        <div className="p-4 flex-1 overflow-y-auto">
          <textarea
            className="w-full min-h-[100px] bg-transparent text-white resize-none outline-none text-lg placeholder-gray-500"
            placeholder="Neler oluyor?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={280}
          />
          {image && (
              <div className="relative mt-4 rounded-xl overflow-hidden border border-white/10 group">
                  <img src={image} className="w-full h-auto max-h-[250px] object-cover" />
                  <button 
                    onClick={() => setImage(null)}
                    className="absolute top-2 right-2 bg-black/50 p-2 rounded-full text-white hover:bg-red-500 transition-colors"
                  >
                      <FaTrash size={12} />
                  </button>
              </div>
          )}
        </div>

        <div className="p-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex gap-2">
                <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="text-primary hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors"
                >
                    <FaImage size={20} />
                </button>
                <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/*"
                    onChange={handleFileChange} 
                />
            </div>
            
            <div className="flex items-center gap-3">
                <div className="text-xs text-gray-500">{content.length}/280</div>
                <button 
                    onClick={handleSubmit}
                    disabled={sending || (!content.trim() && !image)}
                    className="bg-primary text-white px-6 py-2 rounded-full font-bold shadow-neon disabled:opacity-50 disabled:shadow-none transition-all"
                >
                    {sending ? '...' : 'Paylaş'}
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;