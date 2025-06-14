import { Layout } from '@layouts'

const NotFound = () => {
  return (
    <Layout>
      <section className="relative inset-0 w-full h-screen bg-cover bg-center">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <div className="p-10 text-midnight">
            <h2 className="text-4xl font-bold mb-4">Booking Temporarily Unavailable</h2>
            <p className="text-lg max-w-2xl">
              Our online booking service is currently not available. Please contact Moo directly on Instagram for appointments:
              <a 
                href="https://www.instagram.com/milkynailsbymoo" 
                className="underline ml-1"
                target="_blank"
                rel="noreferrer"
              >
                @milkynailsbymoo
              </a>.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFound