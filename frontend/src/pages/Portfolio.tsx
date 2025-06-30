import { useState } from 'react'
import { Layout } from '@layouts'

interface ImgWithFallbackProps {
  src: string
  l: string
}

const ImgWithFallback = ({ src, l }: ImgWithFallbackProps) => {
  const [hasLoaded, setHasLoaded] = useState(false)
  const [error, setError] = useState(false)
  const commonClasses = `${l} w-full rounded-md`

  return (
    <div className={`${commonClasses} relative`}>
      {!hasLoaded && !error && (
        <span className="bg-background-light absolute inset-0 flex items-center justify-center">
          <svg
            className="text-background h-10 w-10"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </span>
      )}

      <img
        src={src}
        className={`${commonClasses} object-cover ${hasLoaded ? 'block' : 'hidden'}`}
        onLoad={() => setHasLoaded(true)}
        onError={() => {
          setError(true)
          setHasLoaded(false)
        }}
      />

      {error && (
        <span className="bg-background-light absolute inset-0 flex items-center justify-center">
          <svg
            className="text-background h-10 w-10"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </span>
      )}
    </div>
  )
}

const images = [
  { src: './portfolio/client_1.webp', l: 'h-[290px]' },
  { src: './portfolio/client_2.webp', l: 'h-[290px]' },
  { src: './portfolio/client_3.webp', l: 'h-[174px]' },
  { src: './portfolio/client_4.webp', l: 'h-[155px]' },
  { src: './portfolio/client_5.webp', l: 'h-[349px]' },
  { src: './portfolio/client_6.webp', l: 'h-[250px]' },
  { src: './portfolio/client_7.webp', l: 'h-[349px]' },
  { src: './portfolio/client_8.webp', l: 'h-[155px]' },
  { src: './portfolio/client_9.webp', l: 'h-[250px]' },
  { src: './portfolio/client_10.webp', l: 'h-[290px]' },
  { src: './portfolio/client_11.webp', l: 'h-[155px]' },
  { src: './portfolio/client_12.webp', l: 'h-[309px]' },
]

// TODO: Change to use Instagram photos for images
const Portfolio = () => {
  return (
    <Layout>
      <section className="from-background-light to-cream relative bg-gradient-to-b">
        <h1 className="text-midnight mt-30 mb-20 text-center text-5xl font-bold">
          Portfolio
        </h1>
        <div className="mx-auto max-w-120 columns-2 gap-4 space-y-4 p-4 md:max-w-4xl md:columns-4">
          {images.map((img, index) => (
            <ImgWithFallback key={index} src={img.src} l={img.l} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Portfolio
