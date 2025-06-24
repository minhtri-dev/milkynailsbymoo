import { Layout } from '@layouts'

const Portfolio = () => {
  return (
    <Layout>
      <section className="bg-cream h-screen bg-cover bg-center">
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <div className="text-midnight p-10">
            <h2 className="mb-4 text-4xl font-bold">Portfolio Coming Soon</h2>
            <p className="max-w-2xl text-lg">
              We are currently building our portfolio. Please check back soon!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Portfolio
