import { ServiceCard } from "@components"
import { Layout } from "@layouts"

const Service = () => {
  return (
    <Layout>
      <section className="pt-20">
        <div>
          <h1 className="text-center text-midnight text-5xl font-bold mb-10">Services</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto px-4">
          <ServiceCard 
            tier="Tier 1"
            items={['basic nail art', 'ombre', 'marble', 'chrome', 'simple line art']}
            priceRange="$40–50"
            bgColor="bg-tier1"
          />
          <ServiceCard 
            tier="Tier 2"
            items={['blooming gel', 'auras', 'isolated chrome', 'gems and pearls', 'charms', 'advanced nail art (on some nails)']}
            priceRange="$60–75"
            bgColor="bg-tier2"
          />
          <ServiceCard 
            tier="Tier 3"
            items={['"pinterest nails"', 'custom designs', '3D gel art', 'multiple charms', 'intricate hand drawn art', 'advanced nail art (on all nails)']}
            priceRange="$80–95"
            bgColor="bg-tier3"
          />
        </div>
        <div className="text-center mt-10 text-midnight text-sm">
          <p>• solid colours are a flat rate of $35</p>
          <p>• rates are subject to change</p>
        </div>
      </section>
    </Layout>
  )
}

export default Service