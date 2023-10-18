'use client'

import { Header } from '@/components/Header'
import { ProgressBar } from '@/components/ProgressBar'
import { useEffect, useState } from 'react'

export default function Home() {
  const [totalFishes, setTotalFishes] = useState(364)
  const [porcentage, setPorcentage] = useState(0)

  useEffect(() => {
    setPorcentage(totalFishes / 21)
  }, [totalFishes])

  return (
    <div>
      <Header />
      <div className="pointer-events-none relative mt-8 flex select-none flex-col items-center justify-center px-8 drop-shadow-2xl ">
        <ProgressBar progress={porcentage} width={700} />
        <p className="relative -top-8 rounded-md bg-[#0f0d09] p-2 drop-shadow-2xl sm:-top-9 sm:text-2xl">
          {0}/2100
        </p>
      </div>
    </div>
  )
}
