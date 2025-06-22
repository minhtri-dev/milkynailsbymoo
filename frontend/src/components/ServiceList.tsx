interface ServiceListProps {
  name: string;
  price: string;
  services: string | string[];
  bgColor: string
  isOpen: boolean;
  onToggle: () => void;
}

const ServiceList: React.FC<ServiceListProps> = ({ name, price, services, bgColor, isOpen, onToggle }) => {
  return (
    <div className="border-b py-4" onClick={onToggle}>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{name}</h2>
        <div className="flex items-center">
            <div className={`text-midnight text-lg font-semibold py-2 px-6 rounded-full`}>
              {price}
            </div>
        </div>
      </div>
      {isOpen && (
        <div className="text-sm mt-2">
          {Array.isArray(services) ? (
            <ul className="list-disc ml-6">
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
  );
};

export default ServiceList;