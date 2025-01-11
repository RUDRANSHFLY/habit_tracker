import { EllipsisVertical } from 'lucide-react';
import React from 'react';
import { Checkbox } from './ui/checkbox';
import { cn } from '@/lib/utils';
import { useHabitStore } from '@/hooks/habit_tracker_store';

interface HabitCardProps {
  id : string;
  name: string;
  done: boolean;
}

const HabitCard = ({ done, name , id }: HabitCardProps) => {

  const {isDoneHabbit} = useHabitStore()

  const handleIsDone = () => {
    isDoneHabbit(id)
  }

  return (
    <div className={cn('w-full px-3 py-5 rounded-md flex justify-between items-center', { 'bg-green-200': done, 'bg-gray-200': !done })}>
      <h1 className={cn('text-xl font-medium', { 'text-green-600': done })}>
        {name}
      </h1>
      <div className={'flex items-center'}>
        <Checkbox checked={done} className={'w-6 h-6'} onClick={handleIsDone} />
        <EllipsisVertical className={'w-6 h-6'} />
      </div>
    </div>
  );
};

export default HabitCard;