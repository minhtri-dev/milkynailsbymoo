import { useEffect, useState } from "react"
import { useLocation } from "react-router"

const Navbar = () => {
  const [isTop, setIsTop] = useState(true)
  const [isHover, setIsHover] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsTop(window.scrollY < 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isHome = location.pathname === "/"

  const navBg =
    isHome && isTop && !isHover
      ? "bg-transparent"
      : "bg-baby-blue"
  const navText =
    isHome && isTop && !isHover
      ? "text-white"
      : "text-midnight"
  const navUnderline =
    isHome && isTop && !isHover
      ? "border-b-1 border-white"
      : "border-b-1 border-[#9dabe4]"

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex items-center justify-between px-8 py-0 transition-colors duration-300 ${navBg} ${navText} ${navUnderline}`}
      onMouseEnter={() => {
        if (window.innerWidth >= 1024 && !menuOpen) setIsHover(true)
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 1024 && !menuOpen) setIsHover(false)
      }}
    >
      <div className="flex items-center gap-8 py-2">
        <a href="/" className="font-bold text-lg">
          milkynailsbymoo
        </a>
        <a
          href="/booking"
          className={`hidden lg:inline-block px-6 py-1 rounded-lg border-2 font-bold bg-transparent transition-colors
            ${
              isHome && isTop && !isHover
                ? "border-white text-white"
                : "border-midnight text-midnight hover:bg-midnight hover:text-white"
            }
          `}
        >
          book now
        </a>
      </div>

      {/* Hamburger for mobile */}
      <div className="lg:hidden flex items-center">
        <button
          className="focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop nav */}
      <div className="hidden lg:flex gap-8">
        <a
          href="/"
          className="font-semibold tracking-wide px-2 pb-3 pt-3 border-b-2 border-b-transparent hover:border-b-midnight"
        >
          home
        </a>
        <a
          href="/#about"
          className="font-semibold tracking-wide px-2 pb-3 pt-3 border-b-2 border-b-transparent hover:border-b-midnight"
        >
          about moo
        </a>
        <a
          href="#contact"
          className="font-semibold tracking-wide px-2 pb-3 pt-3 border-b-2 border-b-transparent hover:border-b-midnight"
        >
          contact
        </a>
        <a
          href="/services"
          className="font-semibold tracking-wide px-2 pb-3 pt-3 border-b-2 border-b-transparent hover:border-b-midnight"
        >
          services
        </a>
        <a
          href="/portfolio"
          className="font-semibold tracking-wide px-2 pb-3 pt-3 border-b-2 border-b-transparent hover:border-b-midnight"
        >
          portfolio
        </a>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="fixed inset-0 bg-cream flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 text-3xl focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          <a
            href="/"
            className="block w-full text-center py-4 text-2xl font-semibold hover:bg-cream-hover"
            onClick={() => setMenuOpen(false)}
          >
            book now
          </a>
          <a
            href="/"
            className="block w-full text-center py-4 text-2xl font-semibold hover:bg-cream-hover"
            onClick={() => setMenuOpen(false)}
          >
            home
          </a>
          <a
            href="/#about"
            className="block w-full text-center py-4 text-2xl font-semibold hover:bg-cream-hover"
            onClick={() => setMenuOpen(false)}
          >
            about moo
          </a>
          <a
            href="#contact"
            className="block w-full text-center py-4 text-2xl font-semibold hover:bg-cream-hover"
            onClick={() => setMenuOpen(false)}
          >
            contact
          </a>
          <a
            href="services"
            className="block w-full text-center py-4 text-2xl font-semibold hover:bg-cream-hover"
            onClick={() => setMenuOpen(false)}
          >
            services
          </a>
          <a
            href="portfolio"
            className="block w-full text-center py-4 text-2xl font-semibold hover:bg-cream-hover"
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