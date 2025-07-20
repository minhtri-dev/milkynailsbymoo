'use client'

import Image from 'next/image'

import { ImgFallback } from '@components'

const Footer = () => {
  return (
    <footer className="bg-cream relative w-full pt-16">
      <Image
        src="/milky_background.svg"
        alt="Footer Background"
        width={1440}
        height={300}
        className="h-auto w-full"
      />
      <div className="w-full bg-gradient-to-r from-[#9dabe4] to-[#afd0f9] p-4 text-center font-semibold text-white">
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 pb-10 md:flex-row">
          <div id="contact" className="space-y-3 text-sm text-white">
            <a
              href="https://instagram.com/milkynailsbymoo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ImgFallback
                src="/icons/insta_icon.png"
                img_size={20}
                placeholder_size="w-3 h-3"
              />
              @milkynailsbymoo
            </a>
            <a
              href="mailto:milkynailsbymoo@gmail.com"
              className="flex items-center gap-2"
            >
              <ImgFallback
                src="/icons/email_icon.png"
                img_size={20}
                placeholder_size="w-3 h-3"
              />
              milkynailsbymoo@gmail.com
            </a>
            <a
              href="https://tiktok.com/@mooshley"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <ImgFallback
                src="/icons/tiktok_icon.png"
                img_size={20}
                placeholder_size="w-3 h-3"
              />
              @mooshley
            </a>
            <div className="flex items-center gap-2">
              <ImgFallback
                src="/icons/phone_icon.png"
                img_size={20}
                placeholder_size="w-3 h-3"
              />
              Available to booked clients
            </div>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/minhtri-dev/milkynailsbymoo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/github.svg"
                alt="GH"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
