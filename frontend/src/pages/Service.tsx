import { useState } from 'react';
import { ServiceList, ServiceCard } from '@components';
import { Layout } from '@layouts';

const services = [
  {
    name: "solid colours",
    price: "$35",
    services: "solid colours are a flat rate of $35",
    bgColor:""
  },
  {
    name: "tier 1",
    price: "$40-50",
    services: ["basic nail art", "ombre", "cat eye", "marble", "chrome", "french"],
    bgColor:"bg-tier1"
  },
  {
    name: "tier 2",
    price: "$60-75",
    services: ["blooming gel", "auras", "isolated chrome", "gems and pearls", "intermediate nail art on some nails"],
    bgColor:"bg-tier2"
  },
  {
    name: "tier 3",
    price: "$80-95",
    services: ["intricate hand drawn art", "each nail has a different design", "intermediate nail art on all nails"],
    bgColor:"bg-tier3"
  },
  {
    name: "tier 4",
    price: "$100+",
    services: ["pinterest nails", "custom designs", "3d gel art", "multiple charms", "intricate hand drawn art", "advanced nail art on all nails"],
    bgColor:"bg-tier4"
  },
  // Additional services commented out
  // {
  //   name: "Promos",
  //   price: "Varies",
  //   services: ["Rates subject to change, no charge per charm"],
  // },
];

const Service = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Layout>
      <section className="bg-cover bg-center bg-background-light">
        <div>
          <h1 className="text-center text-midnight text-5xl font-bold mb-10 pt-20">Services</h1>
        </div>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto px-4">
          <ServiceCard
            tier="Tier 1"
            items={['basic nail art', 'ombre', 'marble', 'chrome', 'simple line art']}
            priceRange="$40 - 50"
            bgColor="bg-tier1"
          />
          <ServiceCard
            tier="Tier 2"
            items={['blooming gel', 'auras', 'isolated chrome', 'gems and pearls', 'charms', 'advanced nail art (on some nails)']}
            priceRange="$60 - 75"
            bgColor="bg-tier2"
          />
          <ServiceCard
            tier="Tier 3"
            items={['"pinterest nails"', 'custom designs', '3D gel art', 'multiple charms', 'intricate hand drawn art', 'advanced nail art (on all nails)']}
            priceRange="$80 - 95"
            bgColor="bg-tier3"
          />
          <ServiceCard
            tier="Tier 4"
            items={['"pinterest nails"', 'custom designs', '3D gel art', 'multiple charms', 'intricate hand drawn art', 'advanced nail art (on all nails)']}
            priceRange="$80 - 95"
            bgColor="bg-tier4"
          />
        </div>
        <div className="px-10 py-10 text-midnight block md:hidden cursor-pointer">
          {services.map((type, index) => (
            <ServiceList
              key={index}
              name={type.name}
              price={type.price}
              services={type.services}
              bgColor={type.bgColor}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
        <div className="text-center text-midnight text-sm">
          <p>• rates are subject to change</p>
        </div>
      
      </section>
      <section className="pt-20 bg-gradient-to-b text-midnight from-background-light to-cream relative">
        <div className="max-w-xl mx-auto flex flex-col px-4">
          <h2 className="text-3xl font-bold pb-10 text-center">what to do after i have booked?</h2>
          <h3 className="text-2xl font-bold pb-5 text-left">pre-appointment</h3>
          <ul className="text-left pb-10 list-disc ml-6">
            <li>send inspiration pics or sketches at least one week in advance</li>
            <li>i will confirm your design 48 hours prior to your appointment</li>
            <li>let me know in advance if you want specific charms</li>
            <li>i do not do foreign removals; please have bare, healthy nails or nails done by me</li>
            <li>48 hours before, i will message you my location</li>
          </ul>
          <h2 className="text-2xl font-bold pb-5 text-left">appointment day</h2>
          <ul className="text-left pb-10 list-disc ml-6">
            <li>arrive with clean hands and nails; apply sunscreen 20 minutes prior</li>
            <li>i may refuse service if your nails are unsafe to work with</li>
            <li>message me upon arrival and wait in your car until i call you in</li>
            <li>let me know if you want a silent service or to chat</li>
            <li>if unhappy during the appointment, let me know immediately</li>
            <li>if you don't speak up during the appointment, i can't make changes</li>
          </ul>
          <h2 className="text-2xl font-bold pb-5 text-left">post-appointment</h2>
          <ul className="text-left pb-10 list-disc ml-6">
            <li>if any nails come off within one week (my fault), message me for a free repair</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Service;