import { useState } from 'react'
import { PolicyModal } from '@components'
import { Layout } from '@layouts'

const ImgWithFallback = ({ src }: { src: string }) => {
  const [hasLoaded, setHasLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div className="">
      {!hasLoaded && !error && (
        <span className="bg-background flex h-80 w-80 items-center justify-center rounded-full">
          <svg
            className="text-background-light h-10 w-10"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </span>
      )}

      <img
        src={src}
        className="h-80 w-80 rounded-full object-cover"
        onLoad={() => setHasLoaded(true)}
        onError={() => setError(true)}
        style={{ display: hasLoaded ? 'block' : 'none' }}
      />

      {error && (
        <span className="bg-background flex h-80 w-80 items-center justify-center rounded-full">
          <svg
            className="text-background-light h-10 w-10"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </span>
      )}
    </div>
  )
}

const Home = () => {
  const [policyOpen, setPolicyOpen] = useState(false)

  return (
    <Layout>
      <section className="bg-cream relative inset-0 h-screen w-full bg-[url('/home/milky_clients.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-transparent bg-gradient-to-b from-[#616161] from-26% to-[#a1988f] to-100% opacity-50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <div className="p-10">
            <h2 className="mb-4 text-4xl font-bold">
              Need your nails decorated?
            </h2>
            <p className="max-w-2xl text-lg">
              I'm your cozy home nail tech located in the heart of Southeast
              Melbourne, offering Gel-X and BIAB services, specialising in
              intricate nail art
            </p>
          </div>
          <a
            href="/portfolio"
            className="hover:text-midnight rounded-lg border-2 border-white bg-transparent px-10 py-3 text-lg font-semibold tracking-widest text-white uppercase hover:bg-white"
          >
            View Portfolio
          </a>
        </div>
      </section>
      <section id="about" className="bg-background-light pt-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-10 lg:flex-row">
          <div className="flex-1 text-center">
            <h2 className="text-midnight mb-6 text-3xl font-bold lg:text-4xl">
              Who is Moo?
            </h2>
            <p className="text-midnight text-lg leading-relaxed lg:text-xl">
              Hi everyone! I'm Ashley, better known as Moo. I'm here to spread
              my love for decorating nails with beautiful art with all of you. I
              used to get my nails done at salons and leave unhappy with the
              results, mostly because I've been told no to certain designs I
              vibed with. So, I thought about it and realised, "I'm pretty sure
              I can do this myself." After deciding university was not for me, I
              signed up for a master class with Nail & Gel Academy, received my
              certificate, and have been honing my skills since.
            </p>
          </div>
          <div className="order-1 flex flex-1 justify-center lg:order-2 lg:justify-end">
            <ImgWithFallback src="/home/moo_profile.png" />
          </div>
        </div>
      </section>
      <section className="from-background-light to-cream relative bg-gradient-to-b pt-70">
        <div className="mx-auto flex max-w-xl flex-col items-center px-4 text-center">
          <h2 className="text-midnight pb-10 text-3xl font-bold">
            Request a Booking
          </h2>
          <a
            href="/services"
            className="bg-midnight hover:bg-midnight-hover rounded-full px-10 py-3 text-lg font-semibold text-white transition"
          >
            View services
          </a>
          <span className="text-midnight my-2 text-lg font-bold">OR</span>
          <a
            href="/booking"
            className="bg-midnight hover:bg-midnight-hover rounded-full px-8 py-3 text-lg font-semibold text-white transition"
          >
            Book now
          </a>
          <button
            type="button"
            className="text-midnight mt-3 cursor-pointer text-xs"
            onClick={() => setPolicyOpen(true)}
          >
            View booking policy
          </button>
        </div>
      </section>
      <PolicyModal open={policyOpen} onClose={() => setPolicyOpen(false)} />
    </Layout>
  )
}

export default Home
