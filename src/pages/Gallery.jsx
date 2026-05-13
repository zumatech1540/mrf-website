import { motion } from "framer-motion";

import {
  FaCamera,
  FaRecycle,
  FaUsers,
  FaLeaf,
  FaArrowRight,
} from "react-icons/fa";

const images = [
  {
    src: "/src/assets/waste-sorting.jpg",
    title: "Waste Collection",
    category: "Operations",
  },

  {
    src: "/src/assets/sorting-facility.jpg",
    title: "Sorting Facility",
    category: "Processing",
  },

  {
    src: "/src/assets/manufacturing.jpg",
    title: "Recycling Process",
    category: "Recycling",
  },

  {
    src: "/src/assets/training.jpg",
    title: "Community Training",
    category: "Community",
  },

  {
    src: "/src/assets/eco-products.jpg",
    title: "Eco Products",
    category: "Innovation",
  },

  {
    src: "/src/assets/TeamWork.jpg",
    title: "Team Work",
    category: "Team",
  },

  {
    src: "/src/assets/SchoolSupport.jpg",
    title: "School Support",
    category: "Education",
  },

  {
    src: "/src/assets/collection.jpg",
    title: "Environmental Cleanup",
    category: "Environment",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

export default function Gallery() {
  return (
    <div className="pt-24 pb-20 bg-gray-50 overflow-hidden">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center px-6"
      >

        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
          OUR GALLERY
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Capturing Our
          <span className="text-green-700"> Environmental Impact</span>
        </h1>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          A visual journey showcasing waste recovery, recycling innovation,
          environmental sustainability, and community empowerment initiatives
          across Kenya.
        </p>

      </motion.section>

      {/* FEATURED IMAGE */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 px-6"
      >

        <div className="max-w-7xl mx-auto relative rounded-[40px] overflow-hidden shadow-2xl">

          <img
            src="/src/assets/decor.jpg"
            alt="Featured"
            className="w-full h-[550px] object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

          {/* CONTENT */}
          <div className="absolute inset-0 flex items-center">

            <div className="max-w-2xl px-10 md:px-16 text-white">

              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur">
                Featured Story
              </span>

              <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
                Transforming Waste Into Opportunity
              </h2>

              <p className="mt-6 text-lg text-gray-200 leading-relaxed">
                Every recovered material represents cleaner communities,
                sustainable livelihoods, and a greener future for generations.
              </p>

              <button className="mt-8 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold transition duration-300 shadow-xl">
                Explore More
              </button>

            </div>

          </div>

        </div>

      </motion.section>

      {/* STATS */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 px-6"
      >

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition text-center">
            <div className="flex justify-center text-green-700 text-4xl">
              <FaCamera />
            </div>

            <h3 className="mt-4 text-4xl font-bold text-gray-900">
              500+
            </h3>

            <p className="mt-2 text-gray-600">
              Project Photos
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition text-center">
            <div className="flex justify-center text-green-700 text-4xl">
              <FaRecycle />
            </div>

            <h3 className="mt-4 text-4xl font-bold text-gray-900">
              65K+
            </h3>

            <p className="mt-2 text-gray-600">
              KG Recovered
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition text-center">
            <div className="flex justify-center text-green-700 text-4xl">
              <FaUsers />
            </div>

            <h3 className="mt-4 text-4xl font-bold text-gray-900">
              40+
            </h3>

            <p className="mt-2 text-gray-600">
              Community Partners
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition text-center">
            <div className="flex justify-center text-green-700 text-4xl">
              <FaLeaf />
            </div>

            <h3 className="mt-4 text-4xl font-bold text-gray-900">
              8+
            </h3>

            <p className="mt-2 text-gray-600">
              Waste Categories
            </p>
          </div>

        </div>

      </motion.section>

      {/* GALLERY GRID */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-24 px-6 max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >

        {images.map((img, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-3xl shadow-sm hover:shadow-2xl bg-white"
          >

            {/* IMAGE */}
            <div className="overflow-hidden">

              <img
                src={img.src}
                alt={img.title}
                className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
              />

            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 right-0 p-6">

              <span className="bg-green-700 text-white text-xs px-3 py-1 rounded-full font-semibold">
                {img.category}
              </span>

              <h3 className="mt-4 text-white font-bold text-xl">
                {img.title}
              </h3>

              <button className="mt-4 flex items-center gap-2 text-green-300 font-semibold hover:text-white transition">
                View Story
                <FaArrowRight />
              </button>

            </div>

          </motion.div>
        ))}

      </motion.section>

      {/* IMPACT SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-24 px-6"
      >

        <div className="max-w-6xl mx-auto bg-gradient-to-r from-green-700 to-green-800 rounded-[40px] p-12 md:p-16 text-center text-white shadow-2xl">

          <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
            REAL IMPACT
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
            Real Work. Real Environmental Change.
          </h2>

          <p className="mt-6 text-green-100 max-w-3xl mx-auto text-lg leading-relaxed">
            Every image reflects our mission to transform waste into value,
            create sustainable livelihoods, support communities, and build a
            cleaner environment for future generations.
          </p>

        </div>

      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 text-center px-6"
      >

        <div className="max-w-4xl mx-auto">

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            VISIT OUR FACILITY
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Experience Sustainability In Action
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Visit our Material Recovery Facility and discover how ELDOPLY MRF
            transforms waste into environmental and economic value in real time.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

            <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold transition duration-300 shadow-lg hover:shadow-xl">
              Book A Visit
            </button>

            <button className="border border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-4 rounded-full font-semibold transition duration-300">
              Contact Us
            </button>

          </div>

        </div>

      </motion.section>

    </div>
  );
}