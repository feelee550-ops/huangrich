import { ReactNode } from 'react';
import Navigation from './Navigation';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  children: ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Layout({ children, activeTab, onTabChange }: LayoutProps) {
  return (
    <div className="max-w-md mx-auto h-screen bg-white flex flex-col font-sans selection:bg-rose-100">
      <main className="flex-1 overflow-y-auto pb-24 scroll-smooth">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="p-6"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      
      <Navigation activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}
