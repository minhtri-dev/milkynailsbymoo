import { useState } from 'react';
import { ServiceList, ServiceCard } from '@components';
import { Layout } from '@layouts';

const services = [
  {
    name: "Tier 1",
    price: "$40-50",
    services: ["Basic nail art", "Ombre", "Cat eye", "Marble", "Chrome", "French"],
    bgColor: "bg-tier1",
    imageUrl: '/tiers/tier-1.jpg'
  },
  {
    name: "Tier 2",
    price: "$60-75",
    services: ["Blooming gel", "Auras", "Isolated chrome", "Gems and pearls", "Intermediate nail art on some nails"],
    bgColor: "bg-tier2",
    imageUrl: '/tiers/tier-2.jpg'
  },
  {
    name: "Tier 3",
    price: "$80-95",
    services: ["Intricate hand drawn art", "Each nail has a different design", "Intermediate nail art on all nails"],
    bgColor: "bg-tier3",
    imageUrl: '/tiers/tier-3.jpg'
  },
  {
    name: "Tier 4",
    price: "$100+",
    services: ['"Pinterest" nails', "Custom designs", "3D gel art", "Multiple charms", "Intricate hand drawn art", "Advanced nail art on all nails"],
    bgColor: "bg-tier4",
    imageUrl: '/tiers/tier-4.jpg'
  },
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:max-w-4xl md:max-w-140 max-w-70 mx-auto px-4 mb-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              tier={service.name}
              items={service.services}
              priceRange={service.price}
              bgColor={service.bgColor}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
        {/* <div className="px-10 py-10 text-midnight block sm:hidden cursor-pointer">
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
        </div> */}
        <div className="text-center text-midnight text-sm italic">
          <p>• Solid colours are at a flat rate of $35</p>
          <p>• I do not charge per charm, they are included in the nail art tier price</p>
          <p>• Rates are subject to change, if deemed necessary</p>
        </div>
      
      </section>
      <section className="pt-20 bg-gradient-to-b text-midnight from-background-light to-cream relative">
        <div className="max-w-xl mx-auto flex flex-col px-4">
          <h2 className="text-3xl font-bold pb-10 text-center">What to do after I have booked?</h2>
          <h3 className="text-2xl font-bold pb-5 text-left">Pre-appointment</h3>
          <ul className="text-left pb-10 list-disc ml-6">
            <li>Send inspiration pics or sketches at least one week in advance</li>
            <li>I will confirm your design 48 hours prior to your appointment</li>
            <li>Let me know in advance if you want specific charms</li>
            <li>I do not do foreign removals; please have bare, healthy nails or nails done by me</li>
            <li>48 hours before, I will message you my location</li>
          </ul>
          <h2 className="text-2xl font-bold pb-5 text-left">Appointment day</h2>
          <ul className="text-left pb-10 list-disc ml-6">
            <li>Arrive with clean hands and nails; apply sunscreen 20 minutes prior</li>
            <li>I may refuse service if your nails are unsafe to work with</li>
            <li>Message me upon arrival and wait in your car until I call you in</li>
            <li>Let me know if you want a silent service or to chat</li>
            <li>If unhappy during the appointment, let me know immediately</li>
            <li>If you don't speak up during the appointment, I can't make changes</li>
          </ul>
          <h2 className="text-2xl font-bold pb-5 text-left">Post-appointment</h2>
          <ul className="text-left pb-10 list-disc ml-6">
            <li>If any nails come off within one week (my fault), message me for a free repair</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Service;