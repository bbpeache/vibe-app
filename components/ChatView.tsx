import React, { useState, useEffect, useRef } from 'react';
import { collection, query, orderBy, limit, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebaseService';
import { User, ChatMessage } from '../types';
import { FaPaperPlane, FaXmark, FaReply, FaShare } from 'react-icons/fa6';

// TARİH FORMATLAMA FONKSİYONU (DÜZELTİLDİ)
const formatTime = (timestamp: any) => {
    if (!timestamp) return '';
    
    // Firebase Timestamp ise .toDate(), değilse new Date()
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    // Negatif süreleri engelle
    if (diffInSeconds < 0) return 'Az önce';

    if (diffInSeconds < 60) return 'Az önce';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} dk önce`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} saat önce`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} gün önce`;
    
    return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long' });
};

interface ChatViewProps {
  currentUser: User;
}

const ChatView: React.FC<ChatViewProps> = ({ currentUser }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [text, setText] = useState("");
  const [replyTo, setReplyTo] = useState<ChatMessage | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mesajları çekme
    const q = query(collection(db, "chat"), orderBy("timestamp", "desc"), limit(50));
    const unsub = onSnapshot(q, (snap) => {
      const msgs: ChatMessage[] = [];
      snap.forEach(d => msgs.push({ ...d.data(), id: d.id } as ChatMessage));
      // Mesajları eskisinden yeniye sırala ki sohbet akışı doğru olsun
      setMessages(msgs.reverse());
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    // Yeni mesaj gelince aşağı kaydır
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!text.trim()) return;
    
    try {
        await addDoc(collection(db, "chat"), {
            text: text.trim(),
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
            timestamp: serverTimestamp(),
            replyTo: replyTo ? { id: replyTo.id, text: replyTo.text, displayName: replyTo.displayName } : null
        });
        setText("");
        setReplyTo(null);
    } catch (error) {
        console.error("Mesaj gönderme hatası:", error);
    }
  };

  return (
    <div className="flex flex-col h-full bg-black/90 relative">
      {/* Header */}
      <div className="p-4 border-b border-white/10 flex items-center justify-between backdrop-blur-md sticky top-0 z-10 bg-black/80">
        <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Global Chat
        </h2>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          Canlı
        </div>
      </div>

      {/* Mesaj Listesi - ÜST ÜSTE BİNME BURADA DÜZELTİLDİ */}
      {/* flex-col ve space-y-4 mesajların alt alta düzgün durmasını sağlar */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col space-y-4 pb-32 no-scrollbar">
        {messages.map((msg) => {
            const isMe = msg.uid === currentUser.uid;
            return (
                <div 
                    key={msg.id} 
                    className={`flex flex-col max-w-[85%] ${isMe ? 'self-end items-end' : 'self-start items-start'} group animate-fade-in`}
                >
                    <div className={`flex items-end gap-2 ${isMe ? 'flex-row-reverse' : 'flex-row'}`}>
                        {/* Avatar */}
                        {!isMe && (
                            <img 
                                src={msg.photoURL || 'https://via.placeholder.com/40'} 
                                alt={msg.displayName}
                                className="w-8 h-8 rounded-full border border-white/10 object-cover"
                            />
                        )}

                        {/* Mesaj Balonu */}
                        <div className={`relative px-4 py-2 rounded-2xl break-words min-w-[60px] ${
                            isMe 
                            ? 'bg-primary text-white rounded-tr-sm shadow-[0_0_15px_rgba(124,58,237,0.3)]' 
                            : 'bg-[#1A1A1A] border border-white/10 text-gray-200 rounded-tl-sm'
                        }`}>
                            {/* Yanıtlanan Mesaj Gösterimi */}
                            {msg.replyTo && (
                                <div className={`text-xs mb-2 p-2 rounded border-l-2 ${isMe ? 'bg-white/10 border-white/50' : 'bg-black/20 border-primary'}`}>
                                    <span className="font-bold opacity-70 block">{msg.replyTo.displayName}</span>
                                    <span className="opacity-50 line-clamp-1">{msg.replyTo.text}</span>
                                </div>
                            )}

                            {!isMe && <span className="text-[10px] font-bold text-primary block mb-1">{msg.displayName}</span>}
                            
                            <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                            
                            {/* Tarih ve İşlemler */}
                            <div className={`flex items-center gap-2 mt-1 ${isMe ? 'justify-end' : 'justify-start'}`}>
                                <span className="text-[10px] opacity-50">{formatTime(msg.timestamp)}</span>
                            </div>
                        </div>

                        {/* Yanıtla Butonu (Sadece hoverda görünür) */}
                        <button 
                            onClick={() => setReplyTo(msg)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-gray-400 hover:text-primary"
                        >
                            <FaReply size={12} />
                        </button>
                    </div>
                </div>
            );
        })}
        <div ref={bottomRef} />
      </div>

      {/* Mesaj Yazma Alanı */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black to-transparent z-20">
        <div className="max-w-3xl mx-auto">
            {replyTo && (
                <div className="bg-surface border border-primary/30 rounded-t-2xl p-3 flex items-center justify-between animate-slide-up">
                    <div className="flex items-center gap-2 overflow-hidden">
                        <FaReply className="text-primary" />
                        <div className="flex flex-col text-xs">
                            <span className="text-primary font-bold">Yanıtlanıyor: {replyTo.displayName}</span>
                            <span className="text-gray-400 truncate max-w-[200px]">"{replyTo.text}"</span>
                        </div>
                    </div>
                    <button onClick={() => setReplyTo(null)} className="text-gray-400 hover:text-red-500 p-2">
                        <FaXmark />
                    </button>
                </div>
            )}

            <div className={`flex items-center gap-2 p-2 bg-surface/90 border border-white/10 backdrop-blur-xl ${replyTo ? 'rounded-b-2xl rounded-tr-2xl rounded-tl-none' : 'rounded-2xl'}`}>
                <input 
                    type="text" 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder={replyTo ? "Yanıtını yaz..." : "Mesaj yaz..."}
                    className="flex-1 bg-transparent text-white px-4 py-2 outline-none placeholder-gray-500 text-sm"
                    autoComplete="off"
                />
                
                <button 
                    onClick={handleSend}
                    disabled={!text.trim()}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all shadow-neon ${
                        text.trim() ? 'bg-primary hover:scale-110 cursor-pointer' : 'bg-gray-700 opacity-50 cursor-not-allowed'
                    }`}
                >
                    <FaPaperPlane className="text-sm translate-x-[-1px] translate-y-[1px]" />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ChatView;
