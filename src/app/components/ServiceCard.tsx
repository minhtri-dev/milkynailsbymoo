'use client'

import { ServiceFallback } from '@components'

type ServiceCardProps = {
  tier: string
  items: string[]
  priceRange: string
  imageUrl: string
  description: string
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
        <ServiceFallback src={imageUrl} />
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
