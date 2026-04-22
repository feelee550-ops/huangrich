import { Home, Calendar, Smile, Settings } from 'lucide-react';
import { motion } from 'motion/react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'home', icon: Home, label: '今日' },
  { id: 'calendar', icon: Calendar, label: '日历' },
  { id: 'mood', icon: Smile, label: '心情' },
  { id: 'profile', icon: Settings, label: '我的' },
];

export default function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md h-20 bg-white/80 backdrop-blur-xl border-t border-stone-100 flex items-center justify-around px-4 z-50">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;
        
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className="relative flex flex-col items-center justify-center w-16 h-full group"
          >
            <div className={`relative p-2 rounded-2xl transition-all duration-300 ${isActive ? 'bg-stone-50' : 'group-hover:bg-stone-50'}`}>
              <Icon
                size={22}
                className={`transition-colors duration-300 ${isActive ? 'text-rose-500' : 'text-stone-400'}`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              {isActive && (
                <motion.div
                  layoutId="nav-glow"
                  className="absolute inset-0 bg-rose-500/10 rounded-2xl blur-lg"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </div>
            <span className={`text-[10px] mt-1 font-medium transition-colors duration-300 ${isActive ? 'text-rose-500' : 'text-stone-400'}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
