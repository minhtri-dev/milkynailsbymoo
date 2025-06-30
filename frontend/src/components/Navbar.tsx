import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

const Navbar = () => {
  const [isTop, setIsTop] = useState(true)
  const [isHover, setIsHover] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsTop(window.scrollY < 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHome = location.pathname === '/'

  const navBg = isHome && isTop && !isHover ? 'bg-transparent' : 'bg-baby-blue'
  const navText = isHome && isTop && !isHover ? 'text-white' : 'text-midnight'
  const navUnderline =
    isHome && isTop && !isHover
      ? 'border-b-1 border-white'
      : 'border-b-1 border-[#9dabe4]'
  const logoSrc =
    isHome && isTop && !isHover ? '/white_logo_transparent.png' : '/blue_logo_transparent.png'

  return (
    <nav
      className={`fixed top-0 z-50 flex w-full items-center justify-between px-8 transition-colors duration-500 ${navBg} ${navText} ${navUnderline}`}
      onMouseEnter={() => {
        if (window.innerWidth >= 1024 && !menuOpen) setIsHover(true)
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 1024 && !menuOpen) setIsHover(false)
      }}
    >
      <div className="flex items-center">
        <img
            src="/white_logo_transparent.png"
            alt="White Logo"
            className={`absolute transition-opacity duration-500 ${               isHome && isTop && !isHover ? 'opacity-100' : 'opacity-0'             }`}
             width={50}
          />
          <img
            src="/blue_logo_transparent.png"
            alt="Blue Logo"
            className={`absolute transition-opacity duration-500 ${               isHome && isTop && !isHover ? 'opacity-0' : 'opacity-100'             }`}
             width={50}
          />
        <a href="/" className="text-lg font-bold ml-12">
          milkynailsbymoo
        </a>
        <a
          href="/booking"
          className={`ml-6 hidden rounded-lg border-2 bg-transparent px-6 py-1 transition-all duration-500 font-bold lg:inline-block ${
            isHome && isTop && !isHover
              ? 'border-white text-white'
              : 'border-midnight text-midnight hover:bg-midnight hover:text-white'
          } `}
        >
          book now
        </a>
      </div>

      {/* Hamburger for mobile */}
      <div className="flex items-center lg:hidden py-2">
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
        <a
          href="/"
          className="hover:border-b-midnight border-b-2 border-b-transparent px-2 py-3 font-semibold tracking-wide"
        >
          home
        </a>
        <a
          href="/#about"
          className="hover:border-b-midnight border-b-2 border-b-transparent px-2 py-3 font-semibold tracking-wide"
        >
          about moo
        </a>
        <a
          href="#contact"
          className="hover:border-b-midnight border-b-2 border-b-transparent px-2 py-3 font-semibold tracking-wide"
        >
          contact
        </a>
        <a
          href="/services"
          className="hover:border-b-midnight border-b-2 border-b-transparent px-2 py-3 font-semibold tracking-wide"
        >
          services
        </a>
        <a
          href="/portfolio"
          className="hover:border-b-midnight border-b-2 border-b-transparent px-2 py-3 font-semibold tracking-wide"
        >
          portfolio
        </a>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="bg-cream fixed inset-0 z-50 flex flex-col items-center justify-center">
          <button
            className="absolute top-6 right-6 text-3xl focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <a
            href="/booking"
            className="hover:bg-cream-hover block w-full py-4 text-center text-2xl font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            book now
          </a>
          <a
            href="/"
            className="hover:bg-cream-hover block w-full py-4 text-center text-2xl font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            home
          </a>
          <a
            href="/#about"
            className="hover:bg-cream-hover block w-full py-4 text-center text-2xl font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            about moo
          </a>
          <a
            href="#contact"
            className="hover:bg-cream-hover block w-full py-4 text-center text-2xl font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            contact
          </a>
          <a
            href="/services"
            className="hover:bg-cream-hover block w-full py-4 text-center text-2xl font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            services
          </a>
          <a
            href="/portfolio"
            className="hover:bg-cream-hover block w-full py-4 text-center text-2xl font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            portfolio
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
