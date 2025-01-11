"use client"

import DashBoard from "@/components/DashBoard";
import HabitCreate from "@/components/HabitCreate";
import HabitList from "@/components/HabitList";
import NavBar from "@/components/NavBar";
import { PlusIcon } from "lucide-react";
import { useState } from "react";


export default function Home() {

  const [openDialog, setopenDialog] = useState(false)

  const handleChange = (open : boolean) => {
    setopenDialog(open)
  }

  return (
   <main className={"px-3 py-2 flex flex-col gap-2 h-screen"}>
      <HabitCreate isOpen={openDialog} handleChange={handleChange} />
      <NavBar />
      <DashBoard />
      <HabitList />
      <div className={"flex flex-row-reverse"}>
         <PlusIcon onClick={() => setopenDialog(true)} className={"w-14 h-14 bg-green-500 rounded-full text-white border-4 border-gray-200"} />
      </div>
   </main>
  );
}
