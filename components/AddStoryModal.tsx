import React, { useState, useRef } from 'react';
import { User } from '../types';
import { collection, addDoc, serverTimestamp, updateDoc, doc } from "firebase/firestore";
import { db } from '../firebaseService';
import { FaXmark, FaImage, FaPalette } from 'react-icons/fa6';

interface AddStoryModalProps {
  user: User;
  onClose: () => void;
}

const GRADIENTS = [
  'from-purple-600 to-blue-600',
  'from-red-500 to-orange-500',
  'from-pink-500 to-rose-500',
  'from-green-400 to-emerald-600',
  'from-gray-900 to-black',
  'from-indigo-500 via-purple-500 to-pink-500'
];

const AddStoryModal: React.FC<AddStoryModalProps> = ({ user, onClose }) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [selectedGradient, setSelectedGradient] = useState(GRADIENTS[0]);
  const [sending, setSending] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Simple size check (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert("Resim boyutu çok yüksek. Lütfen daha küçük bir resim seç.");
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

  const handleShare = async () => {
    if ((!text.trim() && !image) || sending) return;
    setSending(true);
    
    try {
      // Create Story
      await addDoc(collection(db, "stories"), {
        uid: user.uid,
        username: user.username,
        avatar: user.avatar,
        image: image,
        text: text,
        color: selectedGradient,
        timestamp: serverTimestamp(),
        viewed: false
      });
      
      onClose();
    } catch (e) {
      console.error("Error sharing story:", e);
      alert("Hikaye paylaşılamadı.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="absolute inset-0 z-[150] bg-black flex flex-col animate-fade-in">
      {/* Header */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-20 bg-gradient-to-b from-black/60 to-transparent">
         <button 
            onClick={onClose} 
            className="text-white bg-black/20 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
         >
            <FaXmark size={20} />
         </button>
         <button 
            onClick={handleShare}
            disabled={sending || (!text && !image)}
            className="bg-white text-black px-6 py-2 rounded-full font-bold disabled:opacity-50 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:scale-105 transition-all"
         >
            {sending ? '...' : 'Paylaş'}
         </button>
      </div>

      {/* Preview Area */}
      <div className={`flex-1 relative flex items-center justify-center bg-gradient-to-br ${selectedGradient} overflow-hidden`}>
          {image && (
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                  <img src={image} className="w-full h-full object-cover opacity-50 blur-xl absolute inset-0" />
                  <img src={image} className="relative z-10 max-w-full max-h-full object-contain shadow-2xl" />
                  
                  <button 
                    onClick={() => setImage(null)}
                    className="absolute top-20 right-4 z-30 bg-black/50 p-2 rounded-full text-white hover:bg-red-500 transition-colors"
                  >
                      <FaXmark />
                  </button>
              </div>
          )}
          
          <textarea
             value={text}
             onChange={e => setText(e.target.value)}
             placeholder="Hikayeni yaz..."
             maxLength={150}
             className={`relative z-20 w-full max-w-sm bg-transparent text-white text-center text-2xl font-bold outline-none placeholder-white/50 resize-none overflow-hidden mx-6 p-2 ${image ? 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] bg-black/40 rounded-xl backdrop-blur-sm' : ''}`}
             rows={image ? 2 : 4}
          />
      </div>

      {/* Controls */}
      <div className="p-6 bg-surface border-t border-white/10 flex flex-col gap-4 pb-10">
         {!image && (
             <div className="flex justify-center gap-3 overflow-x-auto no-scrollbar py-2 px-1">
                 {GRADIENTS.map(g => (
                     <button
                        key={g}
                        onClick={() => setSelectedGradient(g)}
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${g} border-2 transition-transform hover:scale-110 shadow-lg ${selectedGradient === g ? 'border-white scale-110' : 'border-transparent'}`}
                     />
                 ))}
             </div>
         )}
         
         <div className="flex items-center justify-center gap-8 text-white">
             <button 
                onClick={() => fileInputRef.current?.click()} 
                className="flex flex-col items-center gap-2 group"
             >
                 <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-primary group-hover:border-primary transition-all shadow-neon">
                    <FaImage size={20} />
                 </div>
                 <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Galeri</span>
             </button>

             <button 
                onClick={() => setImage(null)} 
                className="flex flex-col items-center gap-2 group"
             >
                 <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-accent group-hover:border-accent transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                    <FaPalette size={20} />
                 </div>
                 <span className="text-xs text-gray-400 group-hover:text-white transition-colors">Arkaplan</span>
             </button>
         </div>
         <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
      </div>
    </div>
  );
};

export default AddStoryModal;