import { ServiceCard, Layout } from '@components'

const services = [
  {
    name: 'Tier 1',
    price: '$40-50',
    description: '1-2 hours',
    services: [
      'Basic nail art',
      'Ombre',
      'Cat eye',
      'Marble',
      'Chrome',
      'French',
    ],
    bgColor: 'bg-tier1',
    imageUrl: '/tiers/tier-1.jpg',
  },
  {
    name: 'Tier 2',
    price: '$60-75',
    description: '2-3 hours',
    services: [
      'Blooming gel',
      'Auras',
      'Isolated chrome',
      'Gems and pearls',
      'Intermediate nail art on some nails',
    ],
    bgColor: 'bg-tier2',
    imageUrl: '/tiers/tier-2.jpg',
  },
  {
    name: 'Tier 3',
    price: '$80-95',
    description: '3-4 hours',
    services: [
      'Intricate hand drawn art',
      'Each nail has a different design',
      'Intermediate nail art on all nails',
    ],
    bgColor: 'bg-tier3',
    imageUrl: '/tiers/tier-3.jpg',
  },
  {
    name: 'Tier 4',
    price: '$100+',
    description: '4+ hours',
    services: [
      '"Pinterest" nails',
      'Custom designs',
      '3D gel art',
      'Multiple charms',
      'Intricate hand drawn art',
      'Advanced nail art on all nails',
    ],
    bgColor: 'bg-tier4',
    imageUrl: '/tiers/tier-4.jpg',
  },
]

const Service = () => {
  return (
    <Layout>
      <section className="bg-background-light bg-cover bg-center">
        <div>
          <h1 className="text-midnight mt-30 mb-20 text-center text-5xl font-bold">
            Services
          </h1>
        </div>
        <div className="mx-auto mb-4 grid max-w-70 grid-cols-1 gap-8 px-4 md:max-w-140 md:grid-cols-2 lg:max-w-6xl lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              tier={service.name}
              items={service.services}
              priceRange={service.price}
              imageUrl={service.imageUrl}
              description={service.description}
            />
          ))}
        </div>
        <div className="text-midnight text-center text-sm italic">
          <p>• Solid colours are at a flat rate of $35</p>
          <p>
            • I do not charge per charm, they are included in the nail art tier
            price
          </p>
          <p>• Rates are subject to change, if deemed necessary</p>
        </div>
      </section>
      <section className="text-midnight from-background-light to-cream relative bg-gradient-to-b pt-20">
        <div className="mx-auto flex max-w-xl flex-col px-4">
          <h2 className="pb-10 text-center text-3xl font-bold">
            What to do after I have booked?
          </h2>
          <h3 className="pb-5 text-left text-2xl font-bold">Pre-appointment</h3>
          <ul className="ml-6 list-disc pb-10 text-left">
            <li>
              Send inspiration pics or sketches at least one week in advance
            </li>
            <li>
              I will confirm your design 48 hours prior to your appointment
            </li>
            <li>Let me know in advance if you want specific charms</li>
            <li>
              I do not do foreign removals; please have bare, healthy nails or
              nails done by me
            </li>
            <li>48 hours before, I will message you my location</li>
          </ul>
          <h2 className="pb-5 text-left text-2xl font-bold">Appointment day</h2>
          <ul className="ml-6 list-disc pb-10 text-left">
            <li>
              Arrive with clean hands and nails; apply sunscreen 20 minutes
              prior
            </li>
            <li>I may refuse service if your nails are unsafe to work with</li>
            <li>
              Message me upon arrival and wait in your car until I call you in
            </li>
            <li>Let me know if you want a silent service or to chat</li>
            <li>If unhappy during the appointment, let me know immediately</li>
            <li>
              If you don&apos;t speak up during the appointment, I can&apos;t make changes
            </li>
          </ul>
          <h2 className="pb-5 text-left text-2xl font-bold">
            Post-appointment
          </h2>
          <ul className="ml-6 list-disc pb-10 text-left">
            <li>
              If any nails come off within one week (my fault), message me for a
              free repair
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default Service
