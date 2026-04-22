import { CyclePhase, UserCycleData } from '../types';
import { CYCLE_PHASES } from '../constants';

export function getDayOfCycle(lastPeriodDate: string, cycleLength: number): number {
  if (!lastPeriodDate) return 1;
  
  const today = new Date();
  const startDate = new Date(lastPeriodDate);
  
  // Calculate difference in days
  const diffTime = Math.abs(today.getTime() - startDate.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  // The normalized day within the cycle (1-cycleLength)
  return (diffDays % cycleLength) + 1;
}

export function getPhaseFromDay(day: number): CyclePhase {
  if (day >= 1 && day <= 5) return 'MENSTRUAL';
  if (day >= 6 && day <= 13) return 'FOLLICULAR';
  if (day >= 14 && day <= 16) return 'OVULATORY';
  return 'LUTEAL';
}

export function getPhaseInfo(phase: CyclePhase) {
  return CYCLE_PHASES[phase];
}

export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}
