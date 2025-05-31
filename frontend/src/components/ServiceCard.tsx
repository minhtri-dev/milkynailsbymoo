type ServiceCardProps = {
  tier: string
  items: string[]
  priceRange: string
  bgColor: string
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  tier,
  items,
  priceRange,
  bgColor,
}) => {
  return (
    <div className={`rounded-2xl p-4 ${bgColor}`}>
    </div>
  )
}

export default ServiceCard