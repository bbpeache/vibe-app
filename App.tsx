import React, { useState, useEffect } from 'react';
import { doc, getDoc, collection, query, where, onSnapshot } from "firebase/firestore";
import { auth, db } from './firebaseService';
import { User, Post } from './types';

// Icons
import { 
  FaBolt, FaHouse, FaCompass, FaPlus, FaCommentDots, FaUser, 
  FaBell, FaGear 
} from 'react-icons/fa6';

// Views
import FeedView from './components/FeedView';
import ChatView from './components/ChatView';
import ProfileView from './components/ProfileView';
import ExploreView from './components/ExploreView';
import SettingsView from './components/SettingsView';
import NotificationsView from './components/NotificationsView';

// Components
import AuthScreen from './components/AuthScreen';
import PostModal from './components/PostModal';
import CommentModal from './components/CommentModal';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'feed' | 'explore' | 'chat' | 'profile' | 'settings' | 'notifications'>('feed');
  
  // Notification Badge
  const [unreadCount, setUnreadCount] = useState(0);

  // Modals
  const [showPostModal, setShowPostModal] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [selectedPostForComments, setSelectedPostForComments] = useState<Post | null>(null);

  // Initialize Auth
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
          if (userDoc.exists()) {
            setUser({ ...userDoc.data(), uid: firebaseUser.uid } as User);
          } else {
            setUser({
              uid: firebaseUser.uid,
              email: firebaseUser.email,
              username: firebaseUser.displayName || 'User',
              avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${firebaseUser.uid}`,
            });
          }
        } catch (e) {
          console.error("Error fetching user", e);
        }
        setTimeout(() => setShowIntro(false), 800);
      } else {
        setUser(null);
        setShowIntro(false);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // Listen for unread notifications (Simulated for all users for demo purposes)
  useEffect(() => {
      if(!user) return;
      const q = query(collection(db, "notifications"), where("read", "==", false));
      const unsub = onSnapshot(q, (snap) => {
          setUnreadCount(snap.size);
      });
      return () => unsub();
  }, [user]);

  const refreshUser = async () => {
      if (!user) return;
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
          setUser({ ...userDoc.data(), uid: user.uid } as User);
      }
  };

  if (loading) return <div className="h-screen w-full bg-black flex items-center justify-center text-primary"><FaBolt className="text-4xl animate-pulse" /></div>;

  if (!user) return <AuthScreen />;

  if (showIntro) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center text-center transition-opacity duration-500">
        <FaBolt className="text-6xl text-primary mb-6 drop-shadow-[0_0_30px_rgba(124,58,237,0.8)]" />
        <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-primary mb-4">Senin VIBE'ın<br/>Nedir?</h1>
      </div>
    );
  }

  return (
    <div className="w-full h-[100dvh] bg-black text-white overflow-hidden flex justify-center">
      <div className="w-full max-w-[500px] h-full flex flex-col relative bg-surface/50 shadow-2xl backdrop-blur-sm border-x border-white/5">
        
        {/* HEADER */}
        <header className="shrink-0 h-[60px] px-5 flex items-center justify-between bg-black/80 backdrop-blur-md border-b border-white/10 z-20">
          <div 
            className="cursor-pointer group relative"
            onClick={() => setActiveTab('feed')}
          >
            <h1 className="text-3xl font-black tracking-tighter italic select-none">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-text-shimmer animate-logo-glow">
                VIBE
              </span>
            </h1>
            <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500 blur-sm opacity-50"></div>
          </div>
          
          <div className="flex gap-5 text-lg">
            <button 
                onClick={() => setActiveTab('notifications')}
                className={`relative transition-colors hover:scale-110 transform duration-200 ${activeTab === 'notifications' ? 'text-primary' : 'hover:text-primary'}`}
            >
              <FaBell />
              {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] flex items-center justify-center font-bold border border-black animate-pulse">
                      {unreadCount}
                  </span>
              )}
            </button>
            <button 
                onClick={() => setActiveTab('settings')}
                className={`hover:text-primary transition-colors hover:rotate-90 transform duration-300 ${activeTab === 'settings' ? 'text-primary' : ''}`}
            >
              <FaGear />
            </button>
          </div>
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 overflow-hidden relative">
          {activeTab === 'feed' && <FeedView user={user} onCommentClick={(post) => setSelectedPostForComments(post)} />}
          {activeTab === 'explore' && <ExploreView />}
          {activeTab === 'chat' && <ChatView currentUser={user} />}
          {activeTab === 'profile' && <ProfileView user={user} isMe={true} />}
          {activeTab === 'settings' && <SettingsView user={user} onUpdate={refreshUser} onBack={() => setActiveTab('profile')} />}
          {activeTab === 'notifications' && <NotificationsView onBack={() => setActiveTab('feed')} />}
        </main>

        {/* FLOATING DOCK (Hidden in Settings/Notifications) */}
        {(activeTab !== 'settings' && activeTab !== 'notifications') && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] h-[65px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex justify-around items-center px-2 z-40 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                <NavButton icon={<FaHouse />} active={activeTab === 'feed'} onClick={() => setActiveTab('feed')} />
                <NavButton icon={<FaCompass />} active={activeTab === 'explore'} onClick={() => setActiveTab('explore')} />
                
                <button 
                onClick={() => setShowPostModal(true)}
                className="mb-8 w-14 h-14 bg-gradient-to-tr from-primary to-accent rounded-full flex items-center justify-center text-white text-xl shadow-[0_0_20px_rgba(124,58,237,0.6)] hover:scale-110 transition-transform border border-white/20"
                >
                <FaPlus />
                </button>

                <NavButton icon={<FaCommentDots />} active={activeTab === 'chat'} onClick={() => setActiveTab('chat')} />
                <NavButton icon={<FaUser />} active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
            </div>
        )}

        {/* MODALS */}
        {showPostModal && <PostModal user={user} onClose={() => setShowPostModal(false)} />}
        
        {/* Comment Modal */}
        {selectedPostForComments && (
            <CommentModal 
                post={selectedPostForComments} 
                currentUser={user} 
                onClose={() => setSelectedPostForComments(null)} 
            />
        )}
      </div>
    </div>
  );
};

const NavButton: React.FC<{ icon: React.ReactNode, active: boolean, onClick: () => void }> = ({ icon, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-10 h-10 rounded-full flex items-center justify-center text-xl transition-all duration-300 ${active ? 'bg-white/10 text-accent -translate-y-1 shadow-[0_0_10px_rgba(34,211,238,0.3)]' : 'text-gray-400 hover:text-white'}`}
  >
    {icon}
  </button>
);

export default App;