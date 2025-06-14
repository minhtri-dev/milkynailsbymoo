import { Layout } from '@layouts'

const NotFound = () => {
  return (
    <Layout>
      <section className="relative inset-0 w-full h-screen bg-cover bg-center">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <div className="p-10 text-midnight">
            <h2 className="text-4xl font-bold mb-4">Page not found</h2>
            <p className="text-lg max-w-2xl">
              The page you are looking for does not exist.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFound