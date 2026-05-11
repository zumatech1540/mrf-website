import Hero from "../components/home/Hero";
import { motion } from "framer-motion";

<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
></motion.section>

export default function Home() {
  return (
    <div className="bg-white text-gray-800">

      {/* HERO */}
      <Hero />

      {/* ABOUT SECTION */}
      <section className="py-24 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-green-700">
          About MRF
        </h2>

        <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-relaxed">
          ELDOPLY Material Recovery Facility (MRF) transforms waste into valuable
          resources through innovation, recycling, and community empowerment.
          We promote a circular economy where waste becomes wealth and sustainability
          drives development.
        </p>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-green-700">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600">
            End-to-end waste management and sustainability solutions.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-700">
              Waste Collection
            </h3>
            <p className="mt-3 text-gray-600">
              Structured and efficient waste collection from households,
              schools, and businesses.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-700">
              Recycling & Sorting
            </h3>
            <p className="mt-3 text-gray-600">
              Advanced material recovery processes that separate and prepare
              waste for reuse.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-green-700">
              Eco Products
            </h3>
            <p className="mt-3 text-gray-600">
              Production of sustainable furniture, beehives, and recycled
              construction materials.
            </p>
          </div>

        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="py-24 px-6 bg-green-700 text-white text-center">
        
        <h2 className="text-4xl font-bold">
          Our Impact
        </h2>

        <p className="mt-4 text-green-100">
          Real environmental and community transformation results.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">

          <div>
            <h3 className="text-4xl font-bold">5,000+</h3>
            <p className="text-green-100 mt-2">Tons Recycled</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">2,000+</h3>
            <p className="text-green-100 mt-2">People Empowered</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">100+</h3>
            <p className="text-green-100 mt-2">Schools Supported</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">50+</h3>
            <p className="text-green-100 mt-2">Green Jobs</p>
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 px-6 text-center bg-white">
        
        <h2 className="text-4xl font-bold text-green-700">
          Join the Green Revolution
        </h2>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          Partner with ELDOPLY MRF to build a cleaner, greener, and more sustainable future
          through responsible waste management.
        </p>

        <button className="mt-8 bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition">
          Contact Us
        </button>

      </section>

    </div>
  );
}