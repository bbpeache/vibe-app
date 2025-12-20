import React from 'react';
import { FaFire, FaMagnifyingGlass } from 'react-icons/fa6';

const ExploreView: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto no-scrollbar p-4 pb-24 animate-fade-in">
       <h2 className="text-2xl font-black mb-4">Keşfet</h2>
       
       <div className="relative mb-6">
         <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
         <input 
            type="text" 
            placeholder="Ara: Kullanıcı, içerik..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 outline-none focus:border-primary/50 text-sm"
         />
       </div>

       <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 p-6 rounded-2xl relative overflow-hidden mb-6 shadow-neon">
          <div className="relative z-10">
             <h3 className="text-xl font-bold">Gündem</h3>
             <p className="text-white/80 text-sm">Toplulukta neler konuşuluyor?</p>
          </div>
          <FaFire className="absolute -right-2 -bottom-4 text-9xl text-white opacity-20 rotate-[-15deg]" />
       </div>

       <div className="grid grid-cols-2 gap-3">
          {[1,2,3,4].map(i => (
              <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-white/10 cursor-pointer transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full opacity-80"></div>
                  <div className="font-bold text-sm">Trend #{i}</div>
              </div>
          ))}
       </div>
    </div>
  );
};

export default ExploreView;
