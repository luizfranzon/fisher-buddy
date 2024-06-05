'use client'

import { FishCard } from '@/components/FishCard'
import { Header } from '@/components/Header'
import { ProgressBarSection } from '@/components/ProgressBarSection'
import { ContextFishesDataProvider } from '@/context/ContextFishesData'

export default function Home() {
  return (
    <div>
      <ContextFishesDataProvider>
        <Header />
        <ProgressBarSection />
        <FishCard />
      </ContextFishesDataProvider>
    </div >
  )
}
