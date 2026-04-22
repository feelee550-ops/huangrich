import { useState } from 'react';
import { MOOD_CHARACTERS } from '../constants';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import AIChat from './AIChat';
import { PhaseInfo } from '../types';

interface MoodPickerProps {
  onSelect: (moodId: string) => void;
  selectedMoodId?: string;
  currentPhase: PhaseInfo;
}

export default function MoodPicker({ onSelect, selectedMoodId, currentPhase }: MoodPickerProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const selectedMood = MOOD_CHARACTERS.find(m => m.id === selectedMoodId);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-serif font-black tracking-tight">MoodVerse</h2>
        <p className="text-stone-400 font-light">今天谁是你的主导者？</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {MOOD_CHARACTERS.map((char) => {
          const isSelected = selectedMoodId === char.id;
          
          return (
            <motion.button
              key={char.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(char.id)}
              className={`flex items-center gap-6 p-6 rounded-[2rem] border-2 transition-all duration-300 text-left ${
                isSelected 
                ? 'bg-white border-rose-500 shadow-xl shadow-rose-500/10' 
                : 'bg-stone-50 border-transparent hover:bg-stone-100'
              }`}
            >
              <div className="text-4xl aspect-square w-16 h-16 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-stone-100">
                {char.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-bold text-stone-800 text-lg">{char.name}</h4>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-stone-300">状态评分: {char.energy}</span>
                </div>
                <p className="text-stone-500 text-sm font-light leading-snug">{char.description}</p>
              </div>
            </motion.button>
          );
        })}
      </div>
      
      <div className="pt-6 space-y-4">
        <button className="w-full h-16 bg-stone-900 text-white rounded-[2rem] font-medium shadow-2xl shadow-stone-900/20 active:scale-95 transition-transform flex items-center justify-center">
          记录此刻
        </button>
        
        <button 
          onClick={() => setIsChatOpen(true)}
          className="w-full h-16 bg-white text-indigo-600 border-2 border-indigo-100 rounded-[2rem] font-bold shadow-xl shadow-indigo-500/5 active:scale-95 transition-transform flex items-center justify-center gap-2 group hover:border-indigo-500 hover:text-indigo-700"
        >
          <Sparkles size={20} className="text-indigo-400 group-hover:text-indigo-500 transition-colors" />
          我想聊聊
        </button>
      </div>

      <AIChat 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        currentPhase={currentPhase.name}
        currentMood={selectedMood?.name || '平静'}
      />
    </div>
  );
}
