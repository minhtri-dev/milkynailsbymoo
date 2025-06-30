import { Layout } from '@layouts'

//TODO: Change to use instagram photos for images
const Portfolio = () => {
  return (
    <Layout>
      <section className="from-background-light to-cream relative bg-gradient-to-b">
        <h1 className="text-midnight mt-30 mb-20 text-center text-5xl font-bold">
          Portfolio
        </h1>
        <div className="mx-auto max-w-140 columns-2 gap-4 space-y-4 p-4 md:max-w-4xl md:columns-4">
          <img
            className="h-[290px] w-[232px] rounded-md object-cover"
            src="./portfolio/client_1.webp"
            alt="Image 01"
          />
          <img
            className="h-[290px] w-[232px] rounded-md object-cover"
            src="./portfolio/client_2.webp"
            alt="Image 02"
          />
          <img
            className="h-[174px] w-[232px] rounded-md object-cover"
            src="./portfolio/client_3.webp"
            alt="Image 03"
          />
          <img
            className="h-[155px] w-[232px] rounded-md object-cover"
            src="./portfolio/client_4.webp"
            alt="Image 04"
          />
          <img
            className="h-[349px] w-[232px] rounded-md object-cover"
            src="./portfolio/client_5.webp"
            alt="Image 05"
          />
          <img
            className="h-[250px] w-[232px] rounded-md object-cover"
            src="./portfolio/client_6.webp"
            alt="Image 06"
          />
          <img
            className="h-[349px] w-[232px] rounded-md object-cover"
            src="./portfolio/client_7.webp"
            alt="Image 07"
          />
          <img
            className="h-[155px] w-[232px] rounded-md object-cover"
            src="./portfolio/client_8.webp"
            alt="Image 08"
          />
          <img
            className="h-[250px] w-[232px] rounded-md object-cover"
            src="./portfolio/client_9.webp"
            alt="Image 09"
          />
          <img
            className="h-[290px] w-[232px] rounded-md object-cover"
            src="./portfolio/client_10.webp"
            alt="Image 10"
          />
          <img
            className="h-[155px] w-[232px] rounded-md object-cover"
            src="./portfolio/client_11.webp"
            alt="Image 11"
          />
          <img
            className="h-[309px] w-[232px] rounded-md object-cover"
            src="./portfolio/client_12.webp"
            alt="Image 12"
          />
        </div>
      </section>
    </Layout>
  )
}
export default Portfolio
