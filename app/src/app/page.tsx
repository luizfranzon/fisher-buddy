'use client'

import { Header } from '@/components/Header'
import { ProgressBar } from '@/components/ProgressBar'
import { ProgressBarSection } from '@/components/ProgressBarSection'
import { ContextFishesDataProvider } from '@/context/ContextFishesData'
import { useState } from 'react'

export default function Home() {
  const [totalFishes, setTotalFishes] = useState(0)
  const [porcentage, setPorcentage] = useState(0)

  return (
    <div>
      <ContextFishesDataProvider>
        <Header />
        <ProgressBarSection />
      </ContextFishesDataProvider>
    </div >
  )
}
