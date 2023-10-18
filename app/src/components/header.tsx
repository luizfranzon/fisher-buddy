import seaOfThievesLogo from '@/assets/logo-seaofthieves.svg'
import gitHubLogo from '@/assets/github-icon.svg'

import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="relative flex items-center bg-headerBanner bg-[length:1200px_auto] bg-repeat-x p-6">
      <div className="absolute -top-10 left-0 z-[0] h-40 w-full bg-headerSubLayer bg-[length:1200px_auto] bg-repeat-x" />
      <nav className=" z-10 m-auto flex w-full max-w-[1920px] select-none items-center justify-between">
        <Link className="z-[1]" href={'/'}>
          <Image
            quality={100}
            className="mb-4 cursor-pointer"
            src={seaOfThievesLogo}
            alt="Logo branca escrito Sea of Thieves"
            height={46}
          />
        </Link>
        <Link
          className="cursor-pointer"
          href={'https://github.com/luizfranzon/fisher-buddy'}
        >
          <Image
            quality={100}
            className="mb-4 w-10 cursor-pointer"
            src={gitHubLogo}
            alt=""
          />
        </Link>
      </nav>
    </header>
  )
}
