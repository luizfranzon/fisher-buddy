import { Header } from '@/components/Header'
import { ProgressBar } from '@/components/ProgressBar'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="">
        <ProgressBar progress={100} />
      </div>
    </div>
  )
}
