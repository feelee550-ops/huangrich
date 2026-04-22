import { PhaseInfo } from '../types';
import { motion } from 'motion/react';

interface PhaseHeaderProps {
  phase: PhaseInfo;
  dayCount: number;
}

export default function PhaseHeader({ phase, dayCount }: PhaseHeaderProps) {
  return (
    <div className="mb-10 text-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="inline-block px-4 py-1.5 rounded-full border border-stone-200 text-stone-500 text-sm font-medium mb-6 bg-white"
      >
        <span className="mr-2">第 {dayCount} 天</span>
        <span className="opacity-30">|</span>
        <span className="ml-2 uppercase tracking-widest text-[10px] font-bold">{phase.enName}</span>
      </motion.div>
      
      <h1 className="text-6xl font-serif font-black mb-4 tracking-tighter" style={{ color: phase.color }}>
        {phase.name}
      </h1>
      
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="text-xl">{phase.weather}</span>
      </div>
      
      <p className="text-stone-500 text-base leading-relaxed px-4 max-w-xs mx-auto font-light">
        {phase.description}
      </p>
    </div>
  );
}
