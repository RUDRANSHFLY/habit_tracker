import { create } from 'zustand';

export interface Habit {
  id: string;
  name: string;
  habit: string;
  period: string;
  type: string;
  done: boolean;
}

interface HabitState {
  habbits: Habit[];
  addHabit: (habit: Habit) => void;
  isDoneHabbit: (habitId: string) => void;
}

const getInitialHabits = (): Habit[] => {
  if (typeof window !== 'undefined') {
    const storedHabits = localStorage.getItem('habits');
    return storedHabits ? JSON.parse(storedHabits) : [];
  }
  return [];
};

export const useHabitStore = create<HabitState>((set) => ({
  habbits: getInitialHabits(),

  addHabit: (habit: Habit) => {
    set((state) => {
      const updatedHabits = [...state.habbits, habit];
      localStorage.setItem('habits', JSON.stringify(updatedHabits));
      return { habbits: updatedHabits };
    });
  },

  isDoneHabbit: (habitId: string) => {
    set((state) => {
      const updatedHabits = state.habbits.map((habit) =>
        habit.id === habitId ? { ...habit, done: !habit.done } : habit
      );
      localStorage.setItem('habits', JSON.stringify(updatedHabits));
      return { habbits: updatedHabits };
    });
  },
}));