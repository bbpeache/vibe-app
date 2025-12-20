import React, { useState, useRef } from 'react';
import { User } from '../types';
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../firebaseService';
import { FaArrowLeft, FaCamera, FaCheck, FaGraduationCap, FaPalette, FaXmark } from 'react-icons/fa6';

interface SettingsViewProps {
  user: User;
  onUpdate: () => void;
  onBack: () => void;
}

const THEME_COLORS = [
    { name: 'Purple', hex: '#7C3AED' },
    { name: 'Cyan', hex: '#06b6d4' },
    { name: 'Green', hex: '#10b981' },
    { name: 'Red', hex: '#ef4444' },
    { name: 'Pink', hex: '#ec4899' },
    { name: 'Orange', hex: '#f97316' },
];

const SettingsView: React.FC<SettingsViewProps> = ({ user, onUpdate, onBack }) => {
  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(user.bio || "");
  const [avatar, setAvatar] = useState(user.avatar);
  const [university, setUniversity] = useState(user.university || "");
  const [department, setDepartment] = useState(user.department || "");
  const [themeColor, setThemeColor] = useState(user.themeColor || '#7C3AED');
  const [loading, setLoading] = useState(false);

  // Cropper State
  const [showCropper, setShowCropper] = useState(false);
  const [tempImage, setTempImage] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
           setTempImage(event.target.result as string);
           setShowCropper(true);
           setZoom(1);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleCropSave = () => {
      if(!canvasRef.current || !tempImage) return;
      // In a real app with react-easy-crop, we would get the cropped area.
      // Here we will simulate a crop by creating a new canvas from the current view.
      // For simplicity in this environment without external libs, we will just use the preview
      // but essentially we are "Confirming" the image.
      setAvatar(tempImage);
      setShowCropper(false);
      setTempImage(null);
  };

  const handleSave = async () => {
    if (!username.trim()) return;
    setLoading(true);
    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        username,
        bio,
        avatar,
        university,
        department,
        themeColor
      });
      onUpdate();
    } catch (e) {
      console.error("Error updating profile", e);
      alert("Hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full bg-black flex flex-col animate-fade-in relative">
        <div className="flex items-center justify-between p-4 border-b border-white/10">
            <button onClick={onBack} className="text-gray-400 hover:text-white"><FaArrowLeft /></button>
            <h2 className="font-bold text-lg">Profili Düzenle</h2>
            <button 
                onClick={handleSave} 
                disabled={loading}
                className="text-primary font-bold disabled:opacity-50"
                style={{ color: themeColor }}
            >
                {loading ? '...' : <FaCheck />}
            </button>
        </div>

        <div className="p-6 flex flex-col items-center gap-6 overflow-y-auto no-scrollbar">
            {/* Avatar Edit */}
            <div className="relative group">
                <img 
                    src={avatar} 
                    className="w-28 h-28 rounded-full border-4 object-cover bg-gray-800"
                    style={{ borderColor: themeColor }}
                    alt="Avatar" 
                />
                <label 
                    className="absolute bottom-0 right-0 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform text-white"
                    style={{ backgroundColor: themeColor }}
                >
                    <FaCamera className="text-xs" />
                    <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                </label>
            </div>

            <div className="w-full space-y-5">
                {/* Theme Color Selector */}
                <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-500 uppercase tracking-wider font-bold ml-1 flex items-center gap-1">
                        <FaPalette /> Tema Rengi
                    </label>
                    <div className="flex gap-3 justify-center bg-white/5 p-4 rounded-xl border border-white/10">
                        {THEME_COLORS.map(c => (
                            <button
                                key={c.hex}
                                onClick={() => setThemeColor(c.hex)}
                                className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${themeColor === c.hex ? 'border-white scale-110' : 'border-transparent'}`}
                                style={{ backgroundColor: c.hex }}
                                title={c.name}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-500 uppercase tracking-wider font-bold ml-1">Kullanıcı Adı</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={e => setUsername(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-opacity-100 transition-colors"
                        style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                        placeholder="@kullaniciadi"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-500 uppercase tracking-wider font-bold ml-1 flex items-center gap-1">
                        <FaGraduationCap /> Eğitim Bilgileri
                    </label>
                    <div className="grid grid-cols-1 gap-2">
                        <input 
                            type="text" 
                            value={university} 
                            onChange={e => setUniversity(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-opacity-100 transition-colors"
                            placeholder="Üniversite Adı"
                        />
                        <input 
                            type="text" 
                            value={department} 
                            onChange={e => setDepartment(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-opacity-100 transition-colors"
                            placeholder="Bölüm"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-xs text-gray-500 uppercase tracking-wider font-bold ml-1">Biyografi</label>
                    <textarea 
                        value={bio} 
                        onChange={e => setBio(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-opacity-100 transition-colors resize-none h-24"
                        placeholder="Kendinden bahset..."
                        maxLength={150}
                    />
                    <div className="text-right text-xs text-gray-600">{bio.length}/150</div>
                </div>
            </div>
            
            <p className="text-xs text-gray-600 text-center mt-4">
                Değişikliklerin anında yansır. VIBE OS v4.1
            </p>
        </div>

        {/* Image Cropper Modal */}
        {showCropper && tempImage && (
            <div className="absolute inset-0 z-50 bg-black flex flex-col items-center justify-center animate-fade-in p-4">
                <div className="w-full max-w-sm bg-surface rounded-2xl border border-white/10 overflow-hidden flex flex-col h-[500px]">
                     <div className="p-4 border-b border-white/10 flex justify-between items-center">
                         <h3 className="font-bold">Fotoğrafı Düzenle</h3>
                         <button onClick={() => {setShowCropper(false); setTempImage(null);}}><FaXmark /></button>
                     </div>
                     
                     <div className="flex-1 bg-black relative flex items-center justify-center overflow-hidden">
                         <div className="relative w-[250px] h-[250px] rounded-full border-2 border-white overflow-hidden shadow-[0_0_0_9999px_rgba(0,0,0,0.7)] z-10">
                            {/* This is a simulated crop preview */}
                            <img 
                                src={tempImage} 
                                style={{ transform: `scale(${zoom})` }}
                                className="w-full h-full object-cover transition-transform origin-center"
                                alt="Crop Preview"
                            />
                         </div>
                         {/* Background blurred image for effect */}
                         <img src={tempImage} className="absolute inset-0 w-full h-full object-cover opacity-20 blur-md" />
                     </div>

                     <div className="p-6 bg-surface border-t border-white/10">
                         <label className="text-xs text-gray-500 mb-2 block">Yakınlaştır</label>
                         <input 
                            type="range" 
                            min="1" 
                            max="3" 
                            step="0.1" 
                            value={zoom} 
                            onChange={(e) => setZoom(parseFloat(e.target.value))}
                            className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
                         />
                         
                         <div className="flex gap-4 mt-6">
                            <button 
                                onClick={() => {setShowCropper(false); setTempImage(null);}}
                                className="flex-1 py-3 rounded-xl border border-white/10 text-gray-400 hover:text-white"
                            >
                                İptal
                            </button>
                            <button 
                                onClick={handleCropSave}
                                className="flex-1 py-3 rounded-xl text-white font-bold shadow-lg"
                                style={{ backgroundColor: themeColor }}
                            >
                                Kaydet
                            </button>
                         </div>
                     </div>
                </div>
            </div>
        )}
    </div>
  );
};

export default SettingsView;