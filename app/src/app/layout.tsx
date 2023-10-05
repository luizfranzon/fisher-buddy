import { Header } from '@/components/header'
import './globals.css'

import localFont from 'next/font/local'

const manuskript = localFont({
  src: '../../public/fonts/manuskript-regular.ttf',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
        <title>Fisher Buddy » luizfranzon.dev</title>
      </head>
      <body
        className={`h-screen bg-seaFort bg-cover bg-center bg-no-repeat text-white ${manuskript.className}`}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
