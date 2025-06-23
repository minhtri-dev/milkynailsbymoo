type ServiceCardProps = {
  tier: string
  items: string[]
  priceRange: string
  imageUrl: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  tier,
  items,
  priceRange,
  imageUrl,
}) => {
  return (
    <div className="bg-background flex flex-col items-center rounded-sm px-6 pb-6">
      <div className="mt-5 justify-center">
        <img
          src={imageUrl}
          alt=""
          className="h-50 w-50 rounded-full object-cover"
        />
      </div>
      {/* Tier Banner */}
      <div
        className={`text-midnight w-full py-3 text-center text-lg font-bold`}
      >
        {tier}
      </div>

      {/* Items */}
      <ul className="text-midnight space-y-2 py-6 text-center text-[1.05rem] lowercase">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Price at the Bottom */}
      <div
        className={`bg-midnight mt-auto rounded-full px-6 py-2 text-lg font-semibold text-white`}
      >
        {priceRange}
      </div>
    </div>
  )
}

export default ServiceCard