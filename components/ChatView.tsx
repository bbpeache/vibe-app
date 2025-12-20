import React, { useState, useEffect, useRef } from 'react';
import { collection, query, orderBy, limit, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebaseService';
import { User, ChatMessage } from '../types';
import { FaPaperPlane, FaXmark, FaReply, FaShare } from 'react-icons/fa6';

interface ChatViewProps {
  currentUser: User;
}

const ChatView: React.FC<ChatViewProps> = ({ currentUser }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [text, setText] = useState("");
  const [replyTo, setReplyTo] = useState<ChatMessage | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const q = query(collection(db, "chat"), orderBy("timestamp", "desc"), limit(50));
    const unsub = onSnapshot(q, (snap) => {
      const msgs: ChatMessage[] = [];
      snap.forEach(d => msgs.push({ ...d.data(), id: d.id } as ChatMessage));
      setMessages(msgs.reverse());
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!text.trim()) return;
    
    try {
      await addDoc(collection(db, "chat"), {
        uid: currentUser.uid,
        username: currentUser.username,
        text: text,
        timestamp: serverTimestamp(),
        replyTo: replyTo ? {
            id: replyTo.id,
            username: replyTo.username,
            text: replyTo.text.substring(0, 50) + (replyTo.text.length > 50 ? '...' : '')
        } : null
      });
      setText("");
      setReplyTo(null);
    } catch (e) {
      console.error("Error sending", e);
    }
  };

  return (
    <div className="flex flex-col h-full relative pb-20 bg-black">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-3 pt-4 pb-4 space-y-5 no-scrollbar">
        {messages.map((msg) => {
          const isMe = msg.uid === currentUser.uid;
          return (
            <div key={msg.id} className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} animate-fade-in group`}>
               {/* Reply Context Bubble (If this message is a reply) */}
               {msg.replyTo && (
                 <div className={`text-[10px] bg-white/5 px-3 py-1.5 rounded-t-xl mb-[-5px] mx-1 max-w-[80%] opacity-80 border-l-2 border-primary flex items-center gap-1`}>
                    <FaShare className="text-[8px] text-gray-500 transform scale-x-[-1]" />
                    <span className="font-bold text-accent">@{msg.replyTo.username}:</span>
                    <span className="truncate max-w-[100px] text-gray-400">{msg.replyTo.text}</span>
                 </div>
               )}

              <div className="relative max-w-[85%] flex items-end gap-2 group/message">
                 {/* Order changes based on sender for the reply button position */}
                 {isMe ? (
                    <>
                        {/* Reply Button (Appears on hover) */}
                        <button 
                            onClick={() => setReplyTo(msg)}
                            className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-accent bg-white/5 rounded-full transition-all opacity-0 group-hover/message:opacity-100 mb-1"
                            title="Yanıtla"
                        >
                            <FaReply size={10} />
                        </button>

                        <div 
                            className={`px-4 py-2.5 rounded-2xl text-[14px] leading-relaxed relative z-10 bg-primary text-white rounded-br-sm shadow-[0_0_15px_rgba(124,58,237,0.2)]`}
                        >
                            {msg.text}
                        </div>
                    </>
                 ) : (
                    <>
                        <div 
                            className={`px-4 py-2.5 rounded-2xl text-[14px] leading-relaxed relative z-10 bg-white/10 text-white rounded-bl-sm border border-white/5`}
                        >
                            <div className="text-[10px] text-accent mb-0.5 opacity-80 font-bold">{msg.username}</div>
                            {msg.text}
                        </div>
                        
                        {/* Reply Button (Right side for others) */}
                        <button 
                            onClick={() => setReplyTo(msg)}
                            className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-accent bg-white/5 rounded-full transition-all opacity-0 group-hover/message:opacity-100 mb-1"
                            title="Yanıtla"
                        >
                            <FaReply size={10} />
                        </button>
                    </>
                 )}
              </div>
              <span className="text-[9px] text-gray-600 mt-1 px-1">Az önce</span>
            </div>
          );
        })}
        <div ref={bottomRef} />
      </div>

      {/* Input Area */}
      <div className="absolute bottom-20 left-0 w-full px-3 z-50">
        <div className="bg-surface/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Reply Preview Bar */}
            {replyTo && (
                <div className="bg-white/5 px-4 py-2 flex justify-between items-center text-xs border-b border-white/5 animate-slide-up">
                    <div className="flex items-center gap-2 truncate overflow-hidden">
                        <FaReply className="text-primary shrink-0" />
                        <div className="flex flex-col overflow-hidden">
                            <span className="text-gray-400 text-[10px]">Yanıtlanıyor:</span>
                            <div className="flex gap-1 truncate">
                                <span className="font-bold text-white">{replyTo.username}</span>
                                <span className="text-gray-500 truncate">"{replyTo.text}"</span>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => setReplyTo(null)} className="text-gray-400 hover:text-red-500 p-2">
                        <FaXmark />
                    </button>
                </div>
            )}

            <div className="flex items-center gap-2 p-2">
                <input 
                    type="text" 
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder={replyTo ? "Yanıtını yaz..." : "Mesaj yaz..."}
                    className="flex-1 bg-black/50 text-white px-4 py-3 rounded-2xl outline-none placeholder-gray-500 text-sm border border-transparent focus:border-primary/50 transition-colors"
                    autoComplete="off"
                />
                
                <button 
                    onClick={handleSend}
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all shadow-neon hover:scale-105 ${text.trim() ? 'bg-primary' : 'bg-gray-700 opacity-50'}`}
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