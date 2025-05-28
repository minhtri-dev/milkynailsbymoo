const Home = () => {
  return (
    <>
      {/* Hero image section */}
      <section
        className="relative inset-0 w-full h-screen bg-cover bg-center bg-no-repeat bg-[url('/home/milky_clients.png')]"
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#616161] from-26% to-[#a1988f] to-100% opacity-50 bg-transparent"
        />
        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h2 className="text-4xl font-bold mb-4">Need you nails decorated?</h2>
        <p className="text-lg max-w-2xl pb-5">
          I'm your cozy home nail tech located in the heart of Southeast Melbourne, offering Gel-X and BIAB services, specialising in intricate nail art
        </p>
        <a
          href="/portfolio"
          className="border-2 border-white text-white font-semibold py-3 px-10 rounded-lg text-lg bg-transparent hover:bg-white hover:text-[#232a6b] transition-all duration-200 tracking-widest uppercase"
        >
          View Portfolio
        </a>
  </div>
      </section>

      {/* About Moo Section */}
      <section id="about" className="pt-50 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
          {/* Text Content */}
          <div className="flex-1 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#232a6b]">Who is Moo?</h2>
            <p className="text-lg md:text-xl text-[#232a6b] leading-relaxed">
              Hi everyone! I'm Ashley, better known as Moo. I'm here to spread my love for decorating nails with beautiful art with all of you.
              I used to get my nails done at salons and leave unhappy with the results, mostly because I've been told no to certain designs I vibed with.
              So, I thought about it and realised, "I'm pretty sure I can do this myself." After deciding university was not for me,
              I signed up for a master class with Nail & Gel Academy, received my certificate, and have been honing my skills since.
            </p>
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
            <img
              src="/home/moo_profile.png"
              alt=""
              className="w-80 h-80 object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
      </section>
      {/* Request a Booking Section */}
      <section className="pt-70 bg-gradient-to-b from-white to-[#fff1e1] relative">
        <div className="max-w-xl mx-auto flex flex-col items-center text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#232a6b] pb-10">Request a Booking</h2>
          <a
            href="/services"
            className="bg-[#232a6b] text-white font-semibold py-3 px-10 rounded-full text-lg hover:bg-[#3a47a8] transition"
          >
            View services
          </a>
          <span className="my-2 text-[#232a6b] font-bold text-lg">OR</span>
          <a
            href="/booking"
            className="bg-[#232a6b] text-white font-semibold py-3 px-8 rounded-full text-lg hover:bg-[#3a47a8] transition"
          >
            Book now
          </a>
          <span className="text-xs text-[#232a6b] mt-1">View booking policy</span>
        </div>
      </section>
    </>
  )
}

export default Home