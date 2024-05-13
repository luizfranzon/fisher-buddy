import { use, useEffect, useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { useContextFishesData } from "@/context/ContextFishesData";

export function ProgressBarSection() {

  const [porcentage, setPorcentage] = useState(0)
  const [totalFishes, setTotalFishes] = useState(1050)

  const { fishesData, setFishesData } = useContextFishesData()

  useEffect(() => {
    let totalFishes = 0
    Object.values(fishesData).forEach(fishes => {
      totalFishes += fishes.reduce((acc, fish) => acc + fish.quantity, 0)
    })

    setTotalFishes(totalFishes)
    setPorcentage((totalFishes / 2100) * 100)
  }, [])

  return (
    <div className="pointer-events-none relative mt-8 flex select-none flex-col items-center justify-center px-8 drop-shadow-2xl ">
      <ProgressBar progress={porcentage} width={700} />
      <p className="relative -top-8 rounded-md bg-[#0f0d09] p-2 drop-shadow-2xl sm:-top-9 sm:text-2xl">
        {totalFishes}/2100
      </p>
    </div>
  );
}