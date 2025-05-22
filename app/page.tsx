import FullScreenCarousel from "@/components/FullScreenCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <FullScreenCarousel/>

      {/* Product Highlights Section */}
      <section className="bg-neutral-100 py-16 px-6">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Explore Our Collections</h2>
          <p className="text-neutral-600 max-w-xl mx-auto mb-12">
            From timeless essentials to modern comforts, Koshi products are designed to enrich your everyday living.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Padlocks", image: "/KHP_SQ.jpeg", desc: "Secure Everything." },
              { title: "Packings", image: "/KHP_SQ.jpeg", desc: "When availability matters the most." },
              { title: "Cleaning", image: "/KHP_SQ.jpeg", desc: "Clean and Clear" },
            ].map(({ title, image, desc }) => (
              <div key={title} className="rounded shadow-sm p-4 bg-neutral-50">
            <Image
              src={image}
              alt={title}
              width={250}
              height={250}
              className="rounded mb-4 object-cover mx-auto p-4"
            />
            <h3 className="text-xl font-semibold text-neutral-800">{title}</h3>
            <p className="text-neutral-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-screen-xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Sustainability at Heart</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            We prioritize eco-conscious materials and mindful manufacturing, so your home stays beautiful—and responsible.
          </p>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Recycle001.svg/2560px-Recycle001.svg.png"
            alt="Sustainable Materials"
            width={400}
            height={400}
            className="rounded-lg mx-auto object-cover"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-neutral-100 py-16 px-6 my-16">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Customer Stories</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                name: "Dhiraj KC",
                text: "Best products I have ever used! The quality is unmatched and the designs are stunning.",
              },
              {
                name: "Riwaj Dahal",
                text: "I always look forward to shopping from Koshi Home Products.",
              },
              {
                name: "Bijay Karki",
                text: "The quality is top-notch. Every piece is durable and strong.",
              },
            ].map(({ name, text }) => (
              <div key={name} className="bg-neutral-50 p-6 rounded shadow">
                <p className="text-neutral-700 italic">“{text}”</p>
                <span className="block mt-4 font-semibold text-neutral-900">— {name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}