import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import PhaseHeader from './components/PhaseHeader';
import DailyGuide from './components/DailyGuide';
import MoodPicker from './components/MoodPicker';
import Settings from './components/Settings';
import { UserCycleData, CyclePhase } from './types';
import { getDayOfCycle, getPhaseFromDay, getPhaseInfo, formatDate } from './utils/cycleUtils';
import { motion } from 'motion/react';

const INITIAL_DATA: UserCycleData = {
  lastPeriodDate: formatDate(new Date(Date.now() - 1000 * 60 * 60 * 24 * 10)), // 10 days ago by default
  cycleLength: 28,
  periodLength: 5,
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [userCycle, setUserCycle] = useState<UserCycleData>(() => {
    const saved = localStorage.getItem('tidal_user_data');
    return saved ? JSON.parse(saved) : INITIAL_DATA;
  });
  const [selectedMood, setSelectedMood] = useState<string>();

  useEffect(() => {
    localStorage.setItem('tidal_user_data', JSON.stringify(userCycle));
  }, [userCycle]);

  const cycleDay = getDayOfCycle(userCycle.lastPeriodDate, userCycle.cycleLength);
  const currentPhaseId = getPhaseFromDay(cycleDay);
  const currentPhase = getPhaseInfo(currentPhaseId);

  return (
    <Layout activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === 'home' && (
        <section className="space-y-12">
          <PhaseHeader phase={currentPhase} dayCount={cycleDay} />
          <DailyGuide phase={currentPhase} />
        </section>
      )}

      {activeTab === 'calendar' && (
        <section className="space-y-12 pb-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-serif font-black tracking-tight">周期气象</h2>
            <p className="text-stone-400 font-light">未来28天的身体天气预报</p>
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: userCycle.cycleLength }).map((_, i) => {
              const dayNum = i + 1;
              const phaseId = getPhaseFromDay(dayNum);
              const phase = getPhaseInfo(phaseId);
              const isToday = dayNum === cycleDay;
              
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className={`aspect-square rounded-2xl flex flex-col items-center justify-center relative border transition-all ${
                    isToday ? 'border-stone-900 shadow-xl z-10' : 'border-stone-50'
                  }`}
                  style={{ backgroundColor: `${phase.color}15` }}
                >
                  <span className={`text-[10px] font-bold ${isToday ? 'text-stone-900' : 'text-stone-300'}`}>
                    {dayNum}天
                  </span>
                  <span className="text-sm mt-0.5">{phase.weather.split(' ')[0]}</span>
                  {isToday && (
                    <motion.div
                      layoutId="today-indicator"
                      className="absolute -bottom-1 w-1 h-1 bg-stone-900 rounded-full"
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="p-6 rounded-[2rem] bg-stone-50 space-y-4">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-stone-400">
              <span>图例指南</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['MENSTRUAL', 'FOLLICULAR', 'OVULATORY', 'LUTEAL'].map((id) => {
                const p = getPhaseInfo(id as CyclePhase);
                return (
                  <div key={id} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
                    <span className="text-stone-500 text-xs">{p.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'mood' && (
        <MoodPicker onSelect={setSelectedMood} selectedMoodId={selectedMood} />
      )}

      {activeTab === 'profile' && (
        <Settings data={userCycle} onChange={setUserCycle} />
      )}
    </Layout>
  );
}
