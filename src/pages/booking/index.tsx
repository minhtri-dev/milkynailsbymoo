import { Layout } from '@components'

const Booking = () => {
  return (
    <Layout>
      <section className="bg-background-light from-background-light to-cream h-screen bg-gradient-to-b bg-cover bg-center">
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <div className="text-midnight p-10">
            <h2 className="mb-4 text-4xl font-bold">
              Booking Temporarily Unavailable
            </h2>
            <p className="max-w-2xl text-lg">
              Our online booking service is currently not available. Please
              contact Moo directly on Instagram for appointments:
              <a
                href="https://www.instagram.com/milkynailsbymoo"
                className="ml-1 underline"
                target="_blank"
                rel="noreferrer"
              >
                @milkynailsbymoo
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Booking
