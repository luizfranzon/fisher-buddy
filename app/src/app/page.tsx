'use client'

import { Header } from '@/components/Header'
import { ProgressBar } from '@/components/ProgressBar'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="pointer-events-none relative mt-8 flex select-none flex-col items-center justify-center px-8 drop-shadow-2xl ">
        <ProgressBar progress={0} width={700} />
        <p className="relative drop-shadow-2xl sm:-top-9 sm:text-2xl">
          {0}/2100
        </p>
      </div>
    </div>
  )
}
