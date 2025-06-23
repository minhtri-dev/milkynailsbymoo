interface ServiceListProps {
  name: string
  price: string
  services: string | string[]
  isOpen: boolean
  onToggle: () => void
}

const ServiceList: React.FC<ServiceListProps> = ({
  name,
  price,
  services,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="border-b py-4" onClick={onToggle}>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{name}</h2>
        <div className="flex items-center">
          <div
            className={`text-midnight rounded-full px-6 py-2 text-lg font-semibold`}
          >
            {price}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="mt-2 text-sm">
          {Array.isArray(services) ? (
            <ul className="ml-6 list-disc">
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          ) : (
            <p>{services}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default ServiceList