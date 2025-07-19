'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [isTop, setIsTop] = useState(true)
  const [isHover, setIsHover] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setIsTop(window.scrollY < 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHome = pathname === '/'

  const navBg = isHome && isTop && !isHover ? 'bg-transparent' : 'bg-baby-blue'
  const navText = isHome && isTop && !isHover ? 'text-white' : 'text-midnight'
  const navUnderline =
    isHome && isTop && !isHover
      ? 'border-b-1 border-white'
      : 'border-b-1 border-[#9dabe4]'

  return (
    <nav
      className={`fixed top-0 z-50 flex w-full items-center justify-between px-4 transition-colors duration-500 ${navBg} ${navText} ${navUnderline}`}
      onMouseEnter={() => {
        if (window.innerWidth >= 1024 && !menuOpen) setIsHover(true)
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 1024 && !menuOpen) setIsHover(false)
      }}
    >
      <div className="flex items-center">
        <Image
          src="/white_logo_transparent.png"
          alt="White Logo"
          className={`absolute transition-opacity duration-500 ${isHome && isTop && !isHover ? 'opacity-100' : 'opacity-0'} cursor-pointer`}
          width={50}
          height={50}
          onClick={() => void router.push('/')}
        />
        <Image
          src="/blue_logo_transparent.png"
          alt="Blue Logo"
          className={`absolute transition-opacity duration-500 ${isHome && isTop && !isHover ? 'opacity-0' : 'opacity-100'} cursor-pointer`}
          width={50}
          height={50}
          onClick={() => void router.push('/')}
        />
        <Link href="/" className="ml-12 text-lg font-bold">
          milkynailsbymoo
        </Link>
        <Link
          href="/booking"
          className={`ml-6 hidden rounded-lg border-2 bg-transparent px-6 py-1 font-bold transition-all duration-500 lg:inline-block ${
            isHome && isTop && !isHover
              ? 'border-white text-white'
              : 'border-midnight text-midnight hover:bg-midnight hover:text-white'
          } `}
        >
          book now
        </Link>
      </div>

      {/* Hamburger for mobile */}
      <div className="flex items-center py-2 lg:hidden">
        <button
          className="focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop nav */}
      <div className="hidden gap-8 lg:flex">
        <Link
          href="/"
          className="hover:border-b-midnight border-b-2 border-b-transparent px-2 py-3 font-semibold tracking-wide transition-[border-color] duration-500"
        >
          home
        </Link>
        <Link
          href="/#about"
          className="hover:border-b-midnight border-b-2 border-b-transparent px-2 py-3 font-semibold tracking-wide transition-[border-color] duration-500"
        >
          about moo
        </Link>
        <Link
          href="#contact"
          className="hover:border-b-midnight border-b-2 border-b-transparent px-2 py-3 font-semibold tracking-wide transition-[border-color] duration-500"
        >
          contact
        </Link>
        <Link
          href="/services"
          className="hover:border-b-midnight border-b-2 border-b-transparent px-2 py-3 font-semibold tracking-wide transition-[border-color] duration-500"
        >
          services
        </Link>
        <Link
          href="/portfolio"
          className="hover:border-b-midnight border-b-2 border-b-transparent px-2 py-3 font-semibold tracking-wide transition-[border-color] duration-500"
        >
          portfolio
        </Link>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="from-background-light to-cream fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b">
          <button
            className="text-midnight absolute top-6 right-6 text-3xl focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <Link
            href="/booking"
            className="hover:bg-background text-midnight block w-full py-4 text-center text-2xl font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            book now
          </Link>
          <Link
            href="/"
            className="hover:bg-background text-midnight block w-full py-4 text-center text-2xl font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            home
          </Link>
          <Link
            href="/#about"
            className="hover:bg-background text-midnight block w-full py-4 text-center text-2xl font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            about moo
          </Link>
          <Link
            href="#contact"
            className="hover:bg-background text-midnight block w-full py-4 text-center text-2xl font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            contact
          </Link>
          <Link
            href="/services"
            className="hover:bg-background text-midnight block w-full py-4 text-center text-2xl font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            services
          </Link>
          <Link
            href="/portfolio"
            className="hover:bg-background text-midnight block w-full py-4 text-center text-2xl font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            portfolio
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar