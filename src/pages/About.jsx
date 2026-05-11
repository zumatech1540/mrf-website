import { motion } from "framer-motion";

<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
></motion.section>

export default function About() {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* HERO */}
      <section className="text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700">
          About ELDOPLY MRF
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          A Material Recovery Facility dedicated to transforming waste into
          wealth through innovation, recycling, and community empowerment.
        </p>
      </section>

      {/* STORY SECTION */}
      <section className="mt-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-bold text-green-700">Our Story</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            ELDOPLY ENTERPRISES LTD began as a small timber yard serving local
            construction needs. Over time, we evolved into a wood workshop and
            later transformed into a fully operational Material Recovery Facility
            focused on sustainable waste management.
            <br /><br />
            Today, we are a sustainability-driven organization working to reduce
            environmental pollution, create green jobs, and support communities
            through recycling and eco-friendly production.
          </p>
        </div>

        <img
          src="/images/about/story.jpg"
          alt="MRF Story"
          className="rounded-xl shadow-lg"
        />
      </section>

      {/* MISSION VISION */}
      <section className="mt-20 bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-xl font-bold text-green-700">Our Mission</h3>
            <p className="mt-3 text-gray-600">
              To provide innovative and sustainable waste recovery solutions that
              transform waste into valuable resources while empowering communities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h3 className="text-xl font-bold text-green-700">Our Vision</h3>
            <p className="mt-3 text-gray-600">
              To become a leading Material Recovery Facility in Africa driving
              circular economy solutions and environmental sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="mt-20 text-center px-6">
        <h2 className="text-3xl font-bold text-green-700">Our Core Values</h2>

        <div className="mt-10 grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="p-6 bg-green-50 rounded-xl">
            <h3 className="font-bold">Sustainability</h3>
            <p className="text-sm text-gray-600 mt-2">Protecting the environment through responsible practices.</p>
          </div>

          <div className="p-6 bg-green-50 rounded-xl">
            <h3 className="font-bold">Innovation</h3>
            <p className="text-sm text-gray-600 mt-2">Creating new ways to recover and reuse waste.</p>
          </div>

          <div className="p-6 bg-green-50 rounded-xl">
            <h3 className="font-bold">Community</h3>
            <p className="text-sm text-gray-600 mt-2">Empowering people through green jobs and education.</p>
          </div>

          <div className="p-6 bg-green-50 rounded-xl">
            <h3 className="font-bold">Integrity</h3>
            <p className="text-sm text-gray-600 mt-2">Operating transparently and responsibly.</p>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="mt-20 bg-green-700 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold">Our Impact</h2>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-3xl font-bold">5,000+</h3>
            <p>Tons Recycled</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">2,000+</h3>
            <p>People Empowered</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">100+</h3>
            <p>Schools Supported</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">50+</h3>
            <p>Green Jobs Created</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 text-center px-6">
        <h2 className="text-3xl font-bold text-green-700">
          Let’s Build a Greener Future Together
        </h2>

        <p className="mt-4 text-gray-600">
          Partner with ELDOPLY MRF for sustainable waste management solutions.
        </p>

        <button className="mt-6 bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800">
          Contact Us
        </button>
      </section>
    </div>
  );
}
