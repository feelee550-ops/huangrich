import { PhaseInfo, MoodCharacter, CyclePhase } from './types';

export const CYCLE_PHASES: Record<CyclePhase, PhaseInfo> = {
  MENSTRUAL: {
    id: 'MENSTRUAL',
    name: '月经期',
    enName: 'Menstrual',
    range: [1, 5],
    color: 'var(--color-phase-menstrual)',
    weather: '🌙 月亮妹',
    description: '激素水平最低，身体正在通过脱落子宫内膜进行自我更新。',
    dietAdvice: [
      '补铁为主：红肉、动物肝脏、菠菜。',
      '温热饮食：生姜汤、姜枣茶，避免生冷。',
      '补足水分：有助于减轻盆腔充血带来的不适。'
    ],
    exerciseAdvice: [
      '极低强度：阴瑜伽、深度拉伸、慢速散步。',
      '休息优先：如果感觉疲惫，完全可以不运动。'
    ],
    moodFocus: '内省、疲惫、需要独处空间。',
  },
  FOLLICULAR: {
    id: 'FOLLICULAR',
    name: '卵泡期',
    enName: 'Follicular',
    range: [6, 13],
    color: 'var(--color-phase-follicular)',
    weather: '💪 力量姐',
    description: '雌激素开始攀升，能量水平恢复，正是制定计划和学习新事物的黄金时间。',
    dietAdvice: [
      '增加优质蛋白：鱼类、蛋类、豆制品。',
      '多吃十字花科蔬菜：帮助调节激素代谢平衡。',
      '适度减少精制碳水：此时身体对脂肪氧化和燃脂更有效。'
    ],
    exerciseAdvice: [
      '挑战新技能：开始新的训练计划。',
      '力量训练：由于由于关节稳定性较好，可以逐渐增加重量。',
      '中高强度有氧：HIIT、慢跑。'
    ],
    moodFocus: '外向、自信、精力充沛、逻辑清晰。',
  },
  OVULATORY: {
    id: 'OVULATORY',
    name: '排卵期',
    enName: 'Ovulatory',
    range: [14, 16],
    color: 'var(--color-phase-ovulatory)',
    weather: '🔥 燃烧姐',
    description: '雌激素和LH达到峰值。你的协调性良好，社交欲望最强，这也是代谢率最高的几天。',
    dietAdvice: [
      '抗炎排毒：覆盆子、草莓、奇亚籽。',
      '矿物质补充：富含锌的坚果（南瓜籽、腰果）。',
      '维持代谢：多吃高纤维蔬菜，防止激素过度堆积。'
    ],
    exerciseAdvice: [
      '巅峰挑战：适合冲击个人记录（PR）。',
      '高强度训练：Kickboxing、短程冲刺。',
      '关键提醒：韧带在此时可能较为松弛，注意膝关节保护。'
    ],
    moodFocus: '魅力巅峰、社交欲强、适合当众表达和重要商谈。',
  },
  LUTEAL: {
    id: 'LUTEAL',
    name: '黄体期',
    enName: 'Luteal',
    range: [17, 28],
    color: 'var(--color-phase-luteal)',
    weather: '🩵 泪珠妹',
    description: '孕激素逐渐主导，基础体温升高。胰岛素敏感性下降，大脑对葡萄糖需求增加。',
    dietAdvice: [
      '增加复合碳水：燕麦、红薯、糙米（防止情绪不稳）。',
      '补镁防烦躁：黑巧克力、芝麻、香蕉。',
      '抗水肿：钾元素丰富的食物（芹菜、苦瓜）。'
    ],
    exerciseAdvice: [
      '降低强度：长期低强度有氧（LISS）、普拉提。',
      '避免过度皮质醇：不要进行那种让你精疲力竭的长短冲刺。',
      '倾听身体：此时运动受伤概率更高，温和为主。'
    ],
    moodFocus: '敏感、焦虑、需要温柔对待，容易出现PMS。',
  }
};

export const MOOD_CHARACTERS: MoodCharacter[] = [
  {
    id: 'burning',
    name: '燃烧姐',
    alias: 'Burning Sis',
    description: '充满能量，想挑战全世界',
    icon: '🔥',
    color: '#EF4444',
    energy: 5
  },
  {
    id: 'strong',
    name: '力量姐',
    alias: 'Strong Sis',
    description: '专注自信，行胜于言',
    icon: '💪',
    color: '#FBBF24',
    energy: 4
  },
  {
    id: 'moon',
    name: '月亮妹',
    alias: 'Moon Sis',
    description: '慢一点，我想安静地待着',
    icon: '🌙',
    color: '#8B5CF6',
    energy: 2
  },
  {
    id: 'teary',
    name: '泪珠妹',
    alias: 'Teary Angel',
    description: '比较脆弱，需要很多很多的抱抱',
    icon: '🩵',
    color: '#3B82F6',
    energy: 1
  },
  {
    id: 'confused',
    name: '糊涂姐',
    alias: 'Confused Sis',
    description: '脑袋空空，或者想太多了',
    icon: '🌸',
    color: '#F472B6',
    energy: 3
  }
];
