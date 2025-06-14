type ServiceCardProps = {
  tier: string
  items: string[]
  priceRange: string
  bgColor: string // Tailwind color for the tier banner (e.g., "bg-blue-200")
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  tier,
  items,
  priceRange,
  bgColor,
}) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-3xl shadow-lg pb-8 max-w-xs w-full">
      {/* Tier Banner */}
      <div className={`w-full rounded-t-xl py-3 text-center text-lg font-semibold text-midnight ${bgColor}`}>
        {tier}
      </div>

      {/* Items */}
      <ul className="text-center text-midnight text-[1.05rem] space-y-2 py-6">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Price */}
      <div className={`${bgColor} text-midnight text-lg font-semibold py-2 px-6 rounded-full shadow-sm`}>
        {priceRange}
      </div>
    </div>
  )
}

export default ServiceCard