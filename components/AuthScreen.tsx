import React, { useState } from 'react';
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { auth, db } from '../firebaseService';
import { FaBolt } from 'react-icons/fa6';

const AuthScreen: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleAuth = async () => {
    setError("");
    try {
      if (isLogin) {
        await auth.signInWithEmailAndPassword(email, password);
      } else {
        if (!username) throw new Error("Kullanıcı adı gerekli.");
        const cred = await auth.createUserWithEmailAndPassword(email, password);
        if (cred.user) {
            await cred.user.updateProfile({ displayName: username });
            await setDoc(doc(db, "users", cred.user.uid), {
                uid: cred.user.uid,
                username,
                email,
                postCount: 0,
                verified: false,
                createdAt: serverTimestamp()
            });
        }
      }
    } catch (e: any) {
      let msg = e.message;
      if (msg.includes("auth/invalid-email")) msg = "Geçersiz email.";
      if (msg.includes("auth/missing-password")) msg = "Şifre giriniz.";
      if (msg.includes("auth/invalid-credential")) msg = "Hatalı bilgi.";
      setError(msg);
    }
  };

  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center p-6 text-center">
      <FaBolt className="text-5xl text-primary mb-6 animate-pulse" />
      <h1 className="text-4xl font-black mb-2">VIBE OS</h1>
      <p className="text-gray-500 mb-8 text-sm">v4.0 React Edition</p>

      <div className="w-full max-w-xs space-y-3">
        {!isLogin && (
            <input 
                type="text" placeholder="Kullanıcı Adı" 
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none text-white focus:border-primary"
                value={username} onChange={e => setUsername(e.target.value)}
            />
        )}
        <input 
            type="email" placeholder="Email" 
            className="w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none text-white focus:border-primary"
            value={email} onChange={e => setEmail(e.target.value)}
        />
        <input 
            type="password" placeholder="Şifre" 
            className="w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none text-white focus:border-primary"
            value={password} onChange={e => setPassword(e.target.value)}
        />
        
        {error && <p className="text-red-500 text-xs">{error}</p>}

        <button 
            onClick={handleAuth}
            className="w-full bg-primary text-white font-bold py-3 rounded-xl shadow-neon hover:scale-105 transition-transform"
        >
            {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
        </button>

        <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-gray-400 text-sm mt-4 hover:text-white"
        >
            {isLogin ? 'Hesabın yok mu? Kayıt Ol' : 'Giriş Yap'}
        </button>
      </div>
    </div>
  );
};

export default AuthScreen;