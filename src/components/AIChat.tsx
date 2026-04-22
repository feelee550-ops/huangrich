import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles } from 'lucide-react';

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
  // Note: These are kept for consistency in App/MoodPicker logic, 
  // although the internal iframe handles its own logic now.
  currentPhase: string;
  currentMood: string;
}

export default function AIChat({ isOpen, onClose }: AIChatProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="bg-white w-full max-w-2xl h-[85vh] sm:h-[750px] rounded-t-[3rem] sm:rounded-[3rem] flex flex-col shadow-2xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-5 border-b border-stone-100 flex items-center justify-between bg-white sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-500">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-800">汐月灵感</h3>
                  <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold">AI 心灵助手</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-400"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Iframe Content */}
            <div className="flex-1 w-full relative bg-stone-50">
               <iframe
                src="https://udify.app/chatbot/fBkYm7bRyFgaHviR"
                className="w-full h-full border-none"
                allow="microphone"
                title="AI Agent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
