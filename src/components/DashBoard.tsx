import { useHabitStore } from "@/hooks/habit_tracker_store";
import React from "react";

const DashBoard = () => {

  const {habbits} = useHabitStore();

  const totalHabit = habbits.length;
  const completedHabit = habbits.filter(habit => habit.done).length;
  const percentage = (completedHabit / totalHabit) * 100;

  return (
    <div
      className={
        "h-48 rounded-md bg-gradient-to-r from bg-orange-400 via-orange-500 to-orange-600 flex"
      }
    >
      <div className={"w-6/12 flex items-center justify-center"}>
        <div
          className={
            "border-4 border-white rounded-full w-16 h-16 flex items-center justify-center"
          }
        >
          <p className={"text-xl text-white/90"}>{percentage}%</p>
        </div>
      </div>
      <div className={"flex items-center justify-center flex-col"}>
        <p className={"text-xl text-white"}>
          {completedHabit} of {totalHabit} habits
        </p>
        <p className={"text-xl text-white/70"}>Completed today!</p>
      </div>
    </div>
  );
};

export default DashBoard;
