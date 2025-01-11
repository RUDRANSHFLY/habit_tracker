"use client"

import React from 'react'
import HabitCard from './HabitCard'
import { useHabitStore } from '@/hooks/habit_tracker_store'

const HabitList = () => {

  const {habbits} = useHabitStore();

  

  return (
    <div className={'flex flex-col gap-2 mt-5 overflow-hidden'}> 
      <div className={'flex justify-between items-baseline'}>
        <h1 className={'text-2xl font-semibold'}>
        Today Habit
      </h1>
      <p className={'font-normal text-orange-500'}>
        See all
      </p>
      </div>
      <div className={'flex flex-col gap-3 h-72 overflow-hidden'}>
        {
          habbits.map((habit) => (
            <HabitCard key={habit.id} id={habit.id} name={habit.habit} done={habit.done} />
          ))
        }

      </div>
    </div>
  )
}

export default HabitList
