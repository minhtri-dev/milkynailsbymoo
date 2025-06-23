import { Layout } from '@layouts'

const NotFound = () => {
  return (
    <Layout>
      <section className="relative inset-0 h-screen w-full bg-cover bg-center">
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <div className="text-midnight p-10">
            <h2 className="mb-4 text-4xl font-bold">Page not found</h2>
            <p className="max-w-2xl text-lg">
              The page you are looking for does not exist.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFound