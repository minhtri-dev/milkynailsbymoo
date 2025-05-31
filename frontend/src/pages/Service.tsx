import { ServiceCard } from "@components"

const Service = () => {
  return (
    <>
      <section className="pt-20">
        <div>
          <h1 className="text-center text-midnight text-5xl font-bold">Services</h1>
        </div>
        <div className="content-start grid grid-cols-3">
          <ServiceCard 
            tier="Tier 1"
            items={['basic nail art', 'ombre', 'marble', 'chrome', 'simple line art']}
            priceRange="$40–50"
            bgColor="bg-tier1"
            />
        </div>
      </section>
    </>
  )
}

export default Service