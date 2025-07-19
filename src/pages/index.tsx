import { useState } from 'react'
import Link from 'next/link'

import { PolicyModal, Layout, ImgFallback } from '@components'

export default function Home() {
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
              I&apos;m your cozy home nail tech located in the heart of Southeast
              Melbourne, offering Gel-X and BIAB services, specialising in
              intricate nail art
            </p>
          </div>
          <Link
            href="/portfolio"
            className="hover:text-midnight rounded-lg border-2 border-white bg-transparent px-10 py-3 text-lg font-semibold tracking-widest text-white uppercase hover:bg-white"
          >
            View Portfolio
          </Link>
        </div>
      </section>
      <section id="about" className="bg-background-light pt-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-10 lg:flex-row">
          <div className="flex-1 text-center">
            <h2 className="text-midnight mb-6 text-3xl font-bold lg:text-4xl">
              Who is Moo?
            </h2>
            <p className="text-midnight text-lg leading-relaxed lg:text-xl">
              Hi everyone! I&apos;m Ashley, better known as Moo. I&apos;m here to spread
              my love for decorating nails with beautiful art with all of you. I
              used to get my nails done at salons and leave unhappy with the
              results, mostly because I&apos;ve been told no to certain designs I
              vibed with. So, I thought about it and realised, &quot;I&apos;m pretty sure
              I can do this myself.&quot; After deciding university was not for me, I
              signed up for a master class with Nail & Gel Academy, received my
              certificate, and have been honing my skills since.
            </p>
          </div>
          <div className="order-1 flex flex-1 justify-center lg:order-2 lg:justify-end">
            <ImgFallback src="/home/moo_profile.png" img_size={320} placeholder_size="w-40 h-40" style='rounded-full'/>
          </div>
        </div>
      </section>
      <section className="from-background-light to-cream relative bg-gradient-to-b pt-70">
        <div className="mx-auto flex max-w-xl flex-col items-center px-4 text-center">
          <h2 className="text-midnight pb-10 text-3xl font-bold">
            Request a Booking
          </h2>
          <Link
            href="/services"
            className="bg-midnight hover:bg-midnight-hover rounded-full px-10 py-3 text-lg font-semibold text-white transition"
          >
            View services
          </Link>
          <span className="text-midnight my-2 text-lg font-bold">OR</span>
          <Link
            href="/booking"
            className="bg-midnight hover:bg-midnight-hover rounded-full px-8 py-3 text-lg font-semibold text-white transition"
          >
            Book now
          </Link>
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