/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CyclePhase = 'MENSTRUAL' | 'FOLLICULAR' | 'OVULATORY' | 'LUTEAL';

export interface PhaseInfo {
  id: CyclePhase;
  name: string;
  enName: string;
  range: [number, number];
  color: string;
  description: string;
  dietAdvice: string[];
  exerciseAdvice: string[];
  moodFocus: string;
  weather: string;
}

export interface MoodCharacter {
  id: string;
  name: string;
  alias: string;
  description: string;
  icon: string;
  color: string;
  energy: number;
}

export interface UserCycleData {
  lastPeriodDate: string; // ISO String
  cycleLength: number;
  periodLength: number;
}

export interface DailyLog {
  date: string;
  moodId: string;
  stressLevel: number;
  energyLevel: number;
  note?: string;
}
