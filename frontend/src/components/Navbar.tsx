import { useEffect, useState } from "react"
import { useLocation } from "react-router"

const Navbar = () => {
  const [isTop, setIsTop] = useState(true)
  const [isHover, setIsHover] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 10)
    };
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  const isHome = location.pathname === "/"

  const navBg =
    isHome && isTop && !isHover
      ? "bg-transparent"
      : "bg-[#e1efff]"
  const navText =
    isHome && isTop && !isHover
      ? "text-white"
      : "text-[#282477]"
  const navUnderline = 
    isHome && isTop && !isHover
      ? "border-b-0" 
      : "border-b-1 border-[#9dabe4]"

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between px-8 py-0 transition-colors duration-300 ${navBg} ${navText} ${navUnderline}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="flex items-center gap-8">
        <a href="/" className="font-bold text-lg">
          milkynailsbymoo
        </a>
        <button className={`px-6 py-1 rounded-lg border-2 font-bold bg-transparent transition-colors
          ${
            isHome && isTop && !isHover
              ? "border-white text-white hover:bg-white hover:text-black"
              : "border-[#282477] text-[#282477] hover:bg-[#282477] hover:text-white"
          }
        `}>
          book now
        </button>
      </div>

      <div className="flex gap-8">
        <a
          href="/"
          className="font-semibold tracking-wide px-2 pb-3 pt-3 border-b-2 border-b-transparent hover:border-b-[#282477] transition-all duration-200"
        >
          home
        </a>
        <a
          href="/#about"
          className="font-semibold tracking-wide px-2 pb-3 pt-3 border-b-2 border-b-transparent hover:border-b-[#282477] transition-all duration-200"
        >
          about moo
        </a>
        <a
          href="#contact"
          className="font-semibold tracking-wide px-2 pb-3 pt-3 border-b-2 border-b-transparent hover:border-b-[#282477] transition-all duration-200"
        >
          contact
        </a>
        <a
          href="services"
          className="font-semibold tracking-wide px-2 pb-3 pt-3 border-b-2 border-b-transparent hover:border-b-[#282477] transition-all duration-200"
        >
          services
        </a>
        <a
          href="portfolio"
          className="font-semibold tracking-wide px-2 pb-3 pt-3 border-b-2 border-b-transparent hover:border-b-[#282477] transition-all duration-200"
        >
          portfolio
        </a>
      </div>
    </nav>
  )
}

export default Navbar