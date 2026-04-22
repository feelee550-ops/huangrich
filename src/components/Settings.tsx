import { UserCycleData } from '../types';
import { Calendar as CalendarIcon, RotateCcw, Clock } from 'lucide-react';

interface SettingsProps {
  data: UserCycleData;
  onChange: (data: UserCycleData) => void;
}

export default function Settings({ data, onChange }: SettingsProps) {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-serif font-black tracking-tight">你好，汐月</h2>
        <p className="text-stone-400 font-light">管理你的节律基础信息</p>
      </div>

      <div className="space-y-6">
        <div className="p-6 rounded-[2rem] bg-stone-50 border border-stone-100 space-y-6">
          <div className="flex items-center gap-4">
            <CalendarIcon className="text-stone-400" />
            <div className="flex-1">
              <label className="block text-xs uppercase font-bold tracking-widest text-stone-400 mb-1">
                上次经期开始日
              </label>
              <input
                type="date"
                value={data.lastPeriodDate}
                onChange={(e) => onChange({ ...data, lastPeriodDate: e.target.value })}
                className="w-full bg-transparent border-none p-0 text-stone-800 focus:ring-0 font-medium"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <RotateCcw className="text-stone-400" />
            <div className="flex-1">
              <label className="block text-xs uppercase font-bold tracking-widest text-stone-400 mb-1">
                平均周期长度 (天)
              </label>
              <input
                type="number"
                value={data.cycleLength}
                onChange={(e) => onChange({ ...data, cycleLength: parseInt(e.target.value) || 28 })}
                className="w-full bg-transparent border-none p-0 text-stone-800 focus:ring-0 font-medium"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Clock className="text-stone-400" />
            <div className="flex-1">
              <label className="block text-xs uppercase font-bold tracking-widest text-stone-400 mb-1">
                平均经期时长 (天)
              </label>
              <input
                type="number"
                value={data.periodLength}
                onChange={(e) => onChange({ ...data, periodLength: parseInt(e.target.value) || 5 })}
                className="w-full bg-transparent border-none p-0 text-stone-800 focus:ring-0 font-medium"
              />
            </div>
          </div>
        </div>

        <div className="p-8 rounded-[2rem] bg-rose-50 border border-rose-100 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-rose-900">同步 苹果健康 (Apple Health)</h4>
            <p className="text-rose-800/60 text-xs font-medium">获取更精准的状态分析</p>
          </div>
          <div className="w-12 h-6 bg-stone-300 rounded-full relative cursor-not-allowed">
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full" />
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-4 text-center">
        <p className="text-[10px] text-stone-300 leading-relaxed max-w-[200px] mx-auto uppercase tracking-widest font-bold">
          所有数据本地加密存储<br />由 SyncCycle™ 算法支持推荐
        </p>
      </div>
    </div>
  );
}
