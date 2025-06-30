import { useState } from 'react'

type ServiceCardProps = {
  tier: string
  items: string[]
  priceRange: string
  imageUrl: string
  description: string
}

const ImgWithFallback = ({ src }: { src: string }) => {
  const [hasLoaded, setHasLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div className="relative h-50 w-50">
      {!hasLoaded && !error && (
        <span className="bg-background-light absolute inset-0 flex items-center justify-center rounded-full">
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
        alt="Service"
        className={`h-50 w-50 rounded-full object-cover ${hasLoaded ? 'block' : 'hidden'}`}
        onLoad={() => setHasLoaded(true)}
        onError={() => setError(true)}
      />

      {error && (
        <span className="bg-background-light absolute inset-0 flex items-center justify-center rounded-full">
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

const ServiceCard: React.FC<ServiceCardProps> = ({
  tier,
  items,
  priceRange,
  imageUrl,
  description,
}) => {
  return (
    <div className="bg-background flex flex-col items-center rounded-sm px-6 pb-6">
      <div className="-mx-6 mt-5 flex justify-center">
        <ImgWithFallback src={imageUrl} />
      </div>
      <div className="text-midnight w-full pt-3 text-center text-lg font-bold">
        {tier}
      </div>
      <div className="text-midnight w-full text-center text-sm">
        {description}
      </div>
      <ul className="text-midnight space-y-2 py-6 text-center text-[1.05rem] lowercase">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="bg-midnight mt-auto rounded-full px-6 py-2 text-lg font-semibold text-white">
        {priceRange}
      </div>
    </div>
  )
}

export default ServiceCard
