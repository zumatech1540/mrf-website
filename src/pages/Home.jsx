import Hero from "../components/home/Hero";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">

      {/* HERO */}
      <Hero />

      {/* ABOUT SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 px-6 bg-white"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              ABOUT WARENG MRF
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Building Kenya’s Circular Economy Through
              <span className="text-green-700"> Sustainable Recovery</span>
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              Wareng Material Recovery Facility (MRF) is a leading waste
              aggregation and recycling center based in Outspan, Eldoret,
              dedicated to transforming waste into valuable resources through
              recovery, sorting, recycling, and community empowerment.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We bridge the gap between waste producers and end recyclers by
              ensuring recoverable materials are diverted from landfills and
              redirected into productive industrial use, helping create cleaner
              communities and sustainable livelihoods.
            </p>

            <button className="mt-8 bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full font-semibold transition">
              Learn More About Us
            </button>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-green-50 p-8 rounded-3xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-4xl font-bold text-green-700">
                65,350
              </h3>
              <p className="mt-3 text-gray-600 font-medium">
                Kilograms of Waste Processed
              </p>
            </div>

            <div className="bg-white border p-8 rounded-3xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-4xl font-bold text-green-700">
                KES 4.5M
              </h3>
              <p className="mt-3 text-gray-600 font-medium">
                Annual Sales Revenue
              </p>
            </div>

            <div className="bg-white border p-8 rounded-3xl shadow-sm hover:shadow-lg transition">
              <h3 className="text-4xl font-bold text-green-700">
                40+
              </h3>
              <p className="mt-3 text-gray-600 font-medium">
                Local Collectors Supported
              </p>
            </div>

            <div className="bg-green-700 text-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-4xl font-bold">
                12
              </h3>
              <p className="mt-3 text-green-100 font-medium">
                Waste Streams Handled
              </p>
            </div>

          </div>

        </div>
      </motion.section>

      {/* SERVICES SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 px-6 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              OUR SERVICES
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
              End-to-End Waste Recovery Solutions
            </h2>

            <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
              We provide integrated waste management services that support
              industries, municipalities, institutions, and communities through
              sustainable material recovery and recycling.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">

            {/* CARD */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition"
            >
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl">
                ♻️
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Waste Aggregation
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Collection and aggregation of recyclable waste from municipal,
                commercial, industrial, and institutional sources.
              </p>
            </motion.div>

            {/* CARD */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition"
            >
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl">
                🏭
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Sorting & Processing
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Advanced sorting and processing of plastics, metals, paper,
                cartons, rubber, glass, and organic materials for recycling.
              </p>
            </motion.div>

            {/* CARD */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition"
            >
              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl">
                🌍
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Community Engagement
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Training and empowering communities, youth groups, and waste
                collectors on proper waste separation and sustainability.
              </p>
            </motion.div>

          </div>

        </div>
      </motion.section>

      {/* WASTE STREAMS */}
      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              MATERIALS RECOVERED
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
              Waste Streams We Handle
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">

            {[
              "Plastics",
              "Paper",
              "Metals",
              "Glass",
              "Rubber",
              "Organic Waste",
              "Polythene",
              "Textiles",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 border hover:border-green-500 p-6 rounded-2xl text-center transition"
              >
                <h3 className="font-bold text-lg text-gray-800">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* IMPACT SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 px-6 bg-green-700 text-white"
      >
        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
              OUR IMPACT
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold">
              Creating Environmental & Economic Value
            </h2>

            <p className="mt-6 text-green-100 max-w-3xl mx-auto text-lg">
              Through material recovery and responsible waste management,
              Wareng MRF is helping communities reduce pollution while creating
              jobs and economic opportunities.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

            <div>
              <h3 className="text-5xl font-bold">65K+</h3>
              <p className="mt-3 text-green-100">
                KG Recovered
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">KES 4.5M</h3>
              <p className="mt-3 text-green-100">
                Revenue Generated
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">40+</h3>
              <p className="mt-3 text-green-100">
                Collectors Supported
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">8+</h3>
              <p className="mt-3 text-green-100">
                Recovery Categories
              </p>
            </div>

          </div>

        </div>
      </motion.section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white text-center">

        <div className="max-w-4xl mx-auto">

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            PARTNER WITH US
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Join Us in Building a Cleaner Future
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Wareng MRF works with industries, institutions, recyclers,
            development partners, and communities to promote sustainable waste
            recovery and environmental responsibility across Kenya.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

            <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold transition">
              Become a Partner
            </button>

            <button className="border border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-4 rounded-full font-semibold transition">
              Contact Us
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}