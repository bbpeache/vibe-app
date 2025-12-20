import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, limit, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from '../firebaseService';
import { Notification } from '../types';
import { FaHeart, FaBolt, FaArrowLeft } from 'react-icons/fa6';

interface NotificationsViewProps {
    onBack: () => void;
}

const NotificationsView: React.FC<NotificationsViewProps> = ({ onBack }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const q = query(collection(db, "notifications"), orderBy("timestamp", "desc"), limit(20));
    const unsub = onSnapshot(q, (snap) => {
        const n: Notification[] = [];
        snap.forEach(d => n.push({ ...d.data(), id: d.id } as Notification));
        setNotifications(n);

        // Mark all as read locally for demo (In real app, update only unread ones)
        n.forEach(async (notif) => {
            if(!notif.read) {
                await updateDoc(doc(db, "notifications", notif.id), { read: true });
            }
        });
    });
    return () => unsub();
  }, []);

  return (
    <div className="h-full overflow-y-auto no-scrollbar pb-24 animate-fade-in flex flex-col">
        <div className="flex items-center gap-3 p-4 border-b border-white/5 sticky top-0 bg-black/80 backdrop-blur-md z-10">
            <button onClick={onBack} className="text-gray-400 hover:text-white transition-colors">
                <FaArrowLeft />
            </button>
            <h2 className="text-xl font-black">Bildirimler</h2>
        </div>
        
        <div className="flex flex-col">
            {notifications.map(notif => (
                <div key={notif.id} className={`flex items-center gap-4 p-4 border-b border-white/5 hover:bg-white/5 transition-colors ${!notif.read ? 'bg-primary/5' : ''}`}>
                    <div className="relative">
                        <img src={notif.avatar} className="w-12 h-12 rounded-full bg-gray-800 object-cover" />
                        <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-white border border-black ${notif.type === 'like' ? 'bg-red-500' : 'bg-primary'}`}>
                            {notif.type === 'like' ? <FaHeart /> : <FaBolt />}
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-gray-200">
                            {notif.message}
                        </p>
                        <span className="text-[10px] text-gray-500">Az önce</span>
                    </div>
                    {!notif.read && <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>}
                </div>
            ))}

            {notifications.length === 0 && (
                <div className="text-center text-gray-500 mt-10 p-4">
                    Henüz yeni bir VIBE yok.
                </div>
            )}
        </div>
    </div>
  );
};

export default NotificationsView;