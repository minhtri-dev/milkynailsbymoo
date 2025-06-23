import { Layout } from '@layouts'

const NotFound = () => {
  return (
    <Layout>
      <section className="h-screen bg-cover bg-center bg-cream">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <div className="p-10 text-midnight">
            <h2 className="text-4xl font-bold mb-4">Portfolio Coming Soon</h2>
            <p className="text-lg max-w-2xl">
              We are currently building our portfolio. Please check back soon!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFound