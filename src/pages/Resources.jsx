
import { motion } from "framer-motion";

import {
  FaFilePdf,
  FaBookOpen,
  FaRecycle,
  FaLeaf,
  FaDownload,
  FaVideo,
} from "react-icons/fa";

import sustainabilityImg from "../assets/sustainability.jpg";
import recyclingGuideImg from "../assets/recycling-guide.jpg";
import trainingImg from "../assets/training-resource.jpg";
import wasteReportImg from "../assets/waste-report.jpg";

const resources = [
  {
    title: "Waste Management Guide",
    desc: "A practical guide on proper waste segregation, collection, and recycling for institutions and communities.",
    icon: <FaRecycle />,
    image: recyclingGuideImg,
    type: "PDF Resource",
  },
  {
    title: "Sustainability Handbook",
    desc: "Learn sustainable environmental practices that support circular economy and green development.",
    icon: <FaLeaf />,
    image: sustainabilityImg,
    type: "E-Book",
  },
  {
    title: "Community Training Materials",
    desc: "Educational materials used during environmental awareness and community empowerment sessions.",
    icon: <FaBookOpen />,
    image: trainingImg,
    type: "Training Resource",
  },
  {
    title: "Annual Waste Recovery Report",
    desc: "Detailed impact reports showing waste recovery performance, recycling achievements, and community impact.",
    icon: <FaFilePdf />,
    image: wasteReportImg,
    type: "Impact Report",
  },
];

export default function Resources() {
  return (
    <div className="pt-24 pb-20 bg-gray-50 overflow-hidden">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center px-6"
      >
        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
          RESOURCES & KNOWLEDGE
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Sustainability Learning
          <span className="text-green-700"> Resources</span>
        </h1>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          Access educational materials, sustainability reports, recycling
          guides, and environmental training resources designed to support
          communities, institutions, and organizations.
        </p>
      </motion.section>

      {/* RESOURCES GRID */}
      <section className="mt-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {resources.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-300"
          >

            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-60 w-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-8">

              <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                {item.type}
              </span>

              <div className="mt-5 w-16 h-16 rounded-2xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-3xl text-green-700 shadow-md">
                {item.icon}
              </div>

              <h2 className="mt-6 text-2xl font-bold text-gray-900">
                {item.title}
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              <button className="mt-6 flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition">
                <FaDownload /> Download Resource
              </button>

            </div>

          </motion.div>
        ))}

      </section>

      {/* VIDEO / LEARNING SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-24 px-6"
      >

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              EDUCATIONAL CONTENT
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Empowering Communities Through
              <span className="text-green-700"> Environmental Education</span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              We believe that sustainable environmental practices begin with
              awareness and education. Our resources are designed to help
              communities understand proper waste handling, recycling, and
              sustainability.
            </p>

            <div className="mt-8 flex flex-col gap-4">

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-xl text-green-700 text-xl">
                  <FaRecycle />
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    Recycling Awareness
                  </h3>

                  <p className="text-gray-600 mt-1">
                    Educational content promoting proper waste segregation and recycling.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-xl text-green-700 text-xl">
                  <FaBookOpen />
                </div>

                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    Community Learning
                  </h3>

                  <p className="text-gray-600 mt-1">
                    Resources supporting schools, youth groups, and local organizations.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={trainingImg}
              alt="Training"
              className="w-full h-[500px] object-cover"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-24 h-24 rounded-full bg-white text-green-700 flex items-center justify-center text-4xl shadow-2xl hover:scale-110 transition duration-300">
                <FaVideo />
              </button>
            </div>
          </motion.div>

        </div>

      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center py-24 px-6"
      >

        <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-700 to-green-800 rounded-[40px] p-12 text-white shadow-2xl">

          <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
            DOWNLOAD RESOURCES
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
            Access Environmental & Sustainability Resources
          </h2>

          <p className="mt-6 text-green-100 text-lg leading-relaxed">
            Explore educational guides, recycling materials, sustainability
            reports, and community learning resources developed by ELDOPLY MRF.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

            <button className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-full font-semibold transition duration-300 shadow-lg">
              Browse Resources
            </button>

            <button className="border border-white text-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-full font-semibold transition duration-300">
              Contact Our Team
            </button>

          </div>

        </div>

      </motion.section>

    </div>
  );
}


