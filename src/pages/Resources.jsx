import { motion } from "framer-motion";

const resources = [
  {
    title: "Waste Management Guide",
    desc: "A complete guide on how communities can manage and reduce waste effectively.",
    type: "PDF Guide",
  },
  {
    title: "Recycling Best Practices",
    desc: "Standards and methods used in modern Material Recovery Facilities.",
    type: "Article",
  },
  {
    title: "Community Training Manual",
    desc: "Training material for waste collectors and community educators.",
    type: "Manual",
  },
  {
    title: "Sustainability Handbook",
    desc: "Understanding circular economy and environmental conservation.",
    type: "eBook",
  },
];

export default function Resources() {
  return (
    <div className="pt-24 pb-20 bg-gray-50 px-6">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-green-700">
          MRF Resources Center
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Access professional guides, training materials, and sustainability
          knowledge to support waste management and circular economy practices.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="mt-14 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {resources.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-gray-100"
          >

            {/* TYPE BADGE */}
            <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">
              {item.type}
            </span>

            {/* TITLE */}
            <h2 className="text-xl font-bold mt-2 text-gray-800">
              {item.title}
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-3 text-gray-600 leading-relaxed">
              {item.desc}
            </p>

            {/* BUTTON */}
            <button className="mt-5 inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-900 transition">
              Download / View
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>

          </motion.div>
        ))}

      </div>

      {/* CTA SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 text-center bg-green-700 text-white py-16 px-6 rounded-2xl max-w-5xl mx-auto"
      >

        <h2 className="text-3xl font-bold">
          Need Training or Partnership?
        </h2>

        <p className="mt-4 text-green-100 max-w-2xl mx-auto">
          We collaborate with schools, organizations, and communities to deliver
          training programs and sustainability education.
        </p>

        <button className="mt-6 bg-white text-green-700 px-8 py-3 rounded-full hover:bg-gray-100 transition hover:scale-105">
          Contact Us
        </button>

      </motion.div>

    </div>
  );
}