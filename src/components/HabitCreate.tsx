"use client"

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "./ui/select";
import { useHabitStore } from "@/hooks/habit_tracker_store";

import { v4 as uuidv4 } from 'uuid';

interface HabitCreateProps {
  isOpen: boolean;
  handleChange: (open: boolean) => void;
}

const HabitCreate = ({ handleChange, isOpen }: HabitCreateProps) => {

    const [openDone, setOpenDone] = useState(false)
    const [habitName , setHabitName] = useState<string>('')
    const [goal,setGoal] = useState<string>('')
    const [period,setPeriod] = useState<string>('')
    const [type,setType] = useState<string>('')
    const {addHabit} = useHabitStore();


    const handleButton = () => {
        const newHabit = {
            id : uuidv4(),
            name : habitName,
            habit : goal,
            period : period,
            type : type,
            done : false
        }
        addHabit(newHabit)
        setOpenDone(true)
        setHabitName('')
        setGoal('')
        setPeriod('')
        setType('')
        
    }

    if(openDone) {
        return (
            <Sheet open={openDone} onOpenChange={handleChange}>
                <SheetContent side={"top"} className={"mx-5 my-10 flex flex-col gap-5"}>
                    <SheetHeader>
                        <SheetTitle className={"text-left"}>Habit Created</SheetTitle>

                    </SheetHeader>
                    <p className={"text-center"}>
                    New Habit has been added 
                    </p>
                    <p className={"text-center"}>
                        Lets do The best to achieve your goal
                    </p>
                    <SheetFooter>
                        <Button onClick={() => {
                            setOpenDone(false)
                            handleChange(false)
                        }} className={"bg-orange-500"}>okay</Button>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        )
    }


  return (
    <Sheet open={isOpen} onOpenChange={handleChange}>
      <SheetContent side={"top"} className={"mx-5 my-10 flex flex-col gap-5"}>
        <SheetHeader>
          <SheetTitle className={"text-left"}>Create New Habit Goal</SheetTitle>
        </SheetHeader>
        <Input placeholder={"Your Goal"} onChange={(e) => setGoal(e.target.value)} />
        <Input placeholder={"Enter Habit Name"} onChange={(e) => setHabitName(e.target.name)} />
        <Select value={period} onValueChange={(e) => setPeriod(e)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a Period" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Period</SelectLabel>
              <SelectItem value="m1">1 month (30 days)</SelectItem>
              <SelectItem value="m2">2 month (60 days)</SelectItem>
              <SelectItem value="m3">3 month (90 days)</SelectItem>
              
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select value={type} onValueChange={(e) => setType(e)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Habit type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Type</SelectLabel>
              <SelectItem value="e">Everyday</SelectItem>
              <SelectItem value="w">Weekly</SelectItem>
              <SelectItem value="s">Sometimes</SelectItem>
              
            </SelectGroup>
          </SelectContent>
        </Select>
        <SheetFooter>
          <Button onClick={handleButton} className={"bg-orange-500"}>Create New</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};


export default HabitCreate;



