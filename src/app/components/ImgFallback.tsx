'use client'

import Image from 'next/image'
import { useState } from 'react'

interface PlaceholderIconProps {
  size: string
}
function PlaceholderIcon({ size }: PlaceholderIconProps) {
  return (
    <span className="bg-white absolute inset-0 flex items-center justify-center rounded-full">
      <svg
        className={`text-background-light ${size}`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 18"
      >
        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
      </svg>
    </span>
  )
}

export default function ImgFallback({
  src,
  img_size,
  placeholder_size,
  style = '',
}: {
  src: string
  img_size: number
  placeholder_size: string
  style?: string
}) {
  const [hasLoaded, setHasLoaded] = useState(false)
  return (
    <span className="relative flex items-center justify-center">
      <Image
        src={src}
        alt=""
        width={img_size}
        height={img_size}
        className={`object-contain ${hasLoaded ? 'opacity-100' : 'opacity-0'} ${style}`}
        onLoad={() => setHasLoaded(true)}
      />
      {!hasLoaded && <PlaceholderIcon size={placeholder_size} />}
    </span>
  )
}
