import { motion } from "framer-motion";

import {
  FaRecycle,
  FaIndustry,
  FaLeaf,
  FaUsers,
  FaTools,
  FaLightbulb,
} from "react-icons/fa";

import collectionImg from "../assets/collection.jpg";
import sortingImg from "../assets/sorting.jpg";
import recyclingImg from "../assets/recycling.jpg";
import manufacturingImg from "../assets/manufacturing.jpg";
import trainingImg from "../assets/training.jpg";
import consultancyImg from "../assets/consultancy.jpg";

const services = [
  {
    title: "Waste Collection",
    desc: "We collect waste from households, schools, businesses, and institutions using structured and efficient systems.",
    icon: <FaRecycle />,
    image: collectionImg,
  },
  {
    title: "Sorting & Processing",
    desc: "At our MRF, waste is carefully sorted into recyclable categories for efficient recovery and reuse.",
    icon: <FaIndustry />,
    image: sortingImg,
  },
  {
    title: "Recycling & Recovery",
    desc: "We convert waste materials into reusable raw materials for manufacturing and circular economy use.",
    icon: <FaLeaf />,
    image: recyclingImg,
  },
  {
    title: "Eco-Friendly Manufacturing",
    desc: "We produce sustainable furniture, beehives, and recycled construction materials.",
    icon: <FaTools />,
    image: manufacturingImg,
  },
  {
    title: "Community Training",
    desc: "We educate communities on waste management, recycling, and environmental conservation.",
    icon: <FaUsers />,
    image: trainingImg,
  },
  {
    title: "Sustainability Consultancy",
    desc: "We help organizations design and implement efficient waste management systems.",
    icon: <FaLightbulb />,
    image: consultancyImg,
  },
];

export default function Services() {
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
          OUR SERVICES
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Sustainable Waste Management
          <span className="text-green-700"> Solutions</span>
        </h1>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          End-to-end Material Recovery Facility solutions that transform waste
          into value through collection, sorting, recycling, and sustainable production.
        </p>
      </motion.section>

      {/* SERVICES GRID */}
      <section className="mt-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {services.map((item, index) => (
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

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-3xl text-green-700 shadow-md">
                {item.icon}
              </div>

              <h2 className="mt-6 text-2xl font-bold text-gray-900">
                {item.title}
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              <button className="mt-6 text-green-700 font-semibold hover:text-green-800 transition">
                Learn More →
              </button>

            </div>

          </motion.div>
        ))}

      </section>

      {/* PROCESS SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative mt-24 py-24 px-6 text-white overflow-hidden"
      >

        {/* BACKGROUND */}
        <img
          src={recyclingImg}
          alt="Process Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-green-900/85"></div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">

          <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
            OUR PROCESS
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            How Our Recovery Process Works
          </h2>

          <p className="mt-6 text-green-100 max-w-3xl mx-auto text-lg">
            Our streamlined waste recovery process ensures materials are
            collected, sorted, recycled, and transformed into valuable products.
          </p>

          <div className="mt-16 grid md:grid-cols-4 gap-8">

            {[
              [
                "1. Collection",
                "Waste is collected from communities and institutions.",
              ],
              [
                "2. Sorting",
                "Materials are separated and categorized at our facility.",
              ],
              [
                "3. Recycling",
                "Waste is processed into reusable raw materials.",
              ],
              [
                "4. Impact",
                "Environmental, social, and economic value is created.",
              ],
            ].map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/10"
              >
                <h3 className="text-2xl font-bold">
                  {step[0]}
                </h3>

                <p className="text-green-100 mt-4 leading-relaxed">
                  {step[1]}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center py-24 px-6 bg-gradient-to-br from-green-50 to-white"
      >

        <div className="max-w-4xl mx-auto">

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            PARTNER WITH US
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Need Waste Management Solutions?
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Partner with  MRF to build a cleaner, greener future through
            responsible waste recovery, recycling, and sustainability.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

            <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold transition duration-300 shadow-lg hover:shadow-xl">
              Contact Us
            </button>

            <button className="border border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-4 rounded-full font-semibold transition duration-300">
              Learn More
            </button>

          </div>

        </div>

      </motion.section>

    </div>
  );
}