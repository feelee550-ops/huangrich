import { PhaseInfo } from '../types';
import { Utensils, Dumbbell, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface DailyGuideProps {
  phase: PhaseInfo;
}

export default function DailyGuide({ phase }: DailyGuideProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      {/* Diet Card */}
      <motion.div variants={item} className="p-6 rounded-[2rem] bg-stone-50 border border-stone-100 phase-card-shadow">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-white rounded-xl shadow-sm">
            <Utensils size={20} className="text-stone-700" />
          </div>
          <h3 className="font-semibold text-lg">饮食建议</h3>
        </div>
        <ul className="space-y-4">
          {phase.dietAdvice.map((advice, idx) => (
            <li key={idx} className="flex gap-3 text-stone-600 text-[15px] leading-snug">
              <span className="text-stone-300 font-mono text-sm mt-0.5">0{idx + 1}</span>
              {advice}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Exercise Card */}
      <motion.div variants={item} className="p-6 rounded-[2rem] bg-stone-50 border border-stone-100 phase-card-shadow">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-white rounded-xl shadow-sm">
            <Dumbbell size={20} className="text-stone-700" />
          </div>
          <h3 className="font-semibold text-lg">运动建议</h3>
        </div>
        <ul className="space-y-4">
          {phase.exerciseAdvice.map((advice, idx) => (
            <li key={idx} className="flex gap-3 text-stone-600 text-[15px] leading-snug">
              <span className="text-stone-300 font-mono text-sm mt-0.5">0{idx + 1}</span>
              {advice}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Mood/Mind Card */}
      <motion.div variants={item} className="p-6 rounded-[2rem] bg-indigo-50 border border-indigo-100/50">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles size={20} className="text-indigo-600" />
          <h3 className="font-semibold text-lg text-indigo-900">情绪宇宙</h3>
        </div>
        <p className="text-indigo-800/80 text-[15px] leading-relaxed italic">
          "{phase.moodFocus}"
        </p>
      </motion.div>
    </motion.div>
  );
}
