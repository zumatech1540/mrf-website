import Hero from "../components/home/Hero";
import { motion } from "framer-motion";

import recyclingImg from "../assets/recycling.jpg";
import sortingImg from "../assets/waste-sorting.jpg";
import communityImg from "../assets/community.jpg";
import plasticsImg from "../assets/plastics.jpg";

import {
  FaRecycle,
  FaIndustry,
  FaUsers,
  FaLeaf,
} from "react-icons/fa";

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

            <button className="mt-8 bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full font-semibold transition duration-300 shadow-lg hover:shadow-xl">
              Learn More About Us
            </button>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-5">

            <motion.img
              whileHover={{ scale: 1.03 }}
              src={recyclingImg}
              alt="Recycling"
              className="rounded-3xl h-64 w-full object-cover shadow-xl"
            />

            <motion.img
              whileHover={{ scale: 1.03 }}
              src={sortingImg}
              alt="Waste Sorting"
              className="rounded-3xl h-64 w-full object-cover shadow-xl mt-10"
            />

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-green-700 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-center"
            >
              <h3 className="text-5xl font-bold">65K+</h3>

              <p className="mt-4 text-lg text-green-100">
                Kilograms Recovered
              </p>
            </motion.div>

            <motion.img
              whileHover={{ scale: 1.03 }}
              src={communityImg}
              alt="Community"
              className="rounded-3xl h-72 w-full object-cover shadow-xl"
            />

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
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition duration-300 border border-transparent hover:border-green-200"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-3xl text-green-700 shadow-md">
                <FaRecycle />
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
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition duration-300 border border-transparent hover:border-green-200"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-3xl text-green-700 shadow-md">
                <FaIndustry />
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
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition duration-300 border border-transparent hover:border-green-200"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-3xl text-green-700 shadow-md">
                <FaUsers />
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

            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              We recover, sort, and process multiple waste streams to reduce
              environmental pollution and promote sustainable recycling.
            </p>
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
              <motion.div
                whileHover={{ y: -8 }}
                key={index}
                className="bg-white border hover:border-green-500 hover:bg-green-50 p-6 rounded-2xl text-center transition duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="flex justify-center mb-4 text-green-700 text-3xl">
                  <FaLeaf />
                </div>

                <h3 className="font-bold text-lg text-gray-800">
                  {item}
                </h3>
              </motion.div>
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
        className="relative py-24 px-6 text-white overflow-hidden"
      >

        {/* BACKGROUND IMAGE */}
        <img
          src={plasticsImg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-green-900/80"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto">

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
      <section className="py-24 px-6 bg-gradient-to-br from-green-50 to-white text-center">

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

            <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold transition duration-300 shadow-lg hover:shadow-xl">
              Become a Partner
            </button>

            <button className="border border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-4 rounded-full font-semibold transition duration-300">
              Contact Us
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}