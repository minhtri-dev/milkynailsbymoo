type ServiceCardProps = {
  tier: string
  items: string[]
  priceRange: string
  bgColor: string // Tailwind color for the tier banner (e.g., "bg-blue-200")
  imageUrl: string
}

//TODO: fix cards colliding with each other
const ServiceCard: React.FC<ServiceCardProps> = ({
  tier,
  items,
  priceRange,
  bgColor,
  imageUrl
}) => {
  return (
    <div className="flex flex-col items-center rounded-sm bg-background pb-6 px-6 max-w-xs w-3xs">
      <div className="justify-center mt-5">
        <img
            src={imageUrl}
            alt=""
            className="w-50 h-50 object-cover rounded-full"
        />
        </div>
      {/* Tier Banner */}
      <div className={`w-full rounded-t-xl py-3 text-center text-lg font-bold text-midnight `}>
        {tier}
      </div>
      

      {/* Items */}
      <ul className="text-center text-midnight text-[1.05rem] space-y-2 py-6">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Price */}
      <div className={`bg-midnight text-white text-lg font-semibold py-2 px-6 rounded-full`}>
        {priceRange}
      </div>
    </div>
  )
}

export default ServiceCard