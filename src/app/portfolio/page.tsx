import { Layout, PortfolioFallback } from '@components'

const images = [
  { src: '/portfolio/client_1.webp', l: 'h-[290px]' },
  { src: '/portfolio/client_2.webp', l: 'h-[290px]' },
  { src: '/portfolio/client_3.webp', l: 'h-[174px]' },
  { src: '/portfolio/client_4.webp', l: 'h-[155px]' },
  { src: '/portfolio/client_5.webp', l: 'h-[349px]' },
  { src: '/portfolio/client_6.webp', l: 'h-[250px]' },
  { src: '/portfolio/client_7.webp', l: 'h-[349px]' },
  { src: '/portfolio/client_8.webp', l: 'h-[155px]' },
  { src: '/portfolio/client_9.webp', l: 'h-[250px]' },
  { src: '/portfolio/client_10.webp', l: 'h-[290px]' },
  { src: '/portfolio/client_11.webp', l: 'h-[155px]' },
  { src: '/portfolio/client_12.webp', l: 'h-[309px]' },
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
            <PortfolioFallback key={index} src={img.src} l={img.l} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Portfolio
