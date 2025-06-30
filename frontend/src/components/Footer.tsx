import { useState } from 'react'

const Footer = () => {
  // Helper component for icon with fallback
  const IconWithFallback = ({ src, alt }: { src: string; alt: string }) => {
    const [error, setError] = useState(false)
    return error ? (
      <span className="inline-block h-5 w-5 rounded-full bg-white" />
    ) : (
      <img
        src={src}
        alt={alt}
        className="h-5 w-5 rounded-lg object-contain"
        onError={() => setError(true)}
      />
    )
  }

  return (
    <footer className="bg-cream relative w-full pt-16">
      {/* SVG background, fixed to bottom */}
      <img
        src="/milky_background.svg"
        alt="Footer Background"
        className="h-auto w-full"
      />
      {/* Footer content */}
      <div className="w-full bg-gradient-to-r from-[#9dabe4] to-[#afd0f9] p-4 text-center font-semibold text-white">
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 pb-10 md:flex-row">
          {/* Contact Info */}
          <div id="contact" className="space-y-3 text-sm text-white">
            <a
              href="https://instagram.com/milkynailsbymoo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <IconWithFallback src="/icons/insta_icon.png" alt="Instagram" />
              @milkynailsbymoo
            </a>
            <a
              href="mailto:milkynailsbymoo@gmail.com"
              className="flex items-center gap-2"
            >
              <IconWithFallback src="/icons/email_icon.png" alt="Email" />
              milkynailsbymoo@gmail.com
            </a>
            <a
              href="https://tiktok.com/@mooshley"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <IconWithFallback src="/icons/tiktok_icon.png" alt="TikTok" />
              @mooshley
            </a>
            <div className="flex items-center gap-2">
              <IconWithFallback
                src="/icons/phone_icon.png"
                alt="Phone Number"
              />
              Available to booked clients
            </div>
          </div>
          {/* GitHub */}
          <div className="flex gap-4">
            <a
              href="https://github.com/minhtri-dev/milkynailsbymoo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/github.svg"
                alt="GitHub"
                className="h-10 w-10 rounded-lg"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
