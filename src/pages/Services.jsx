import { motion } from "framer-motion";

const services = [
  {
    title: "Waste Collection",
    desc: "We collect waste from households, schools, businesses, and institutions using structured and efficient systems.",
  },
  {
    title: "Sorting & Processing",
    desc: "At our MRF, waste is carefully sorted into recyclable categories for efficient recovery and reuse.",
  },
  {
    title: "Recycling & Recovery",
    desc: "We convert waste materials into reusable raw materials for manufacturing and circular economy use.",
  },
  {
    title: "Eco-Friendly Manufacturing",
    desc: "We produce sustainable furniture, beehives, and recycled construction materials.",
  },
  {
    title: "Community Training",
    desc: "We educate communities on waste management, recycling, and environmental conservation.",
  },
  {
    title: "Sustainability Consultancy",
    desc: "We help organizations design and implement efficient waste management systems.",
  },
];

export default function Services() {
  return (
    <div className="pt-24 pb-20 bg-gray-50">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center px-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-green-700">
          Our Services
        </h1>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          End-to-end Material Recovery Facility solutions that transform waste
          into value through collection, sorting, recycling, and sustainable production.
        </p>
      </motion.section>

      {/* SERVICES GRID */}
      <section className="mt-16 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <h2 className="text-xl font-bold text-green-700">
              {item.title}
            </h2>
            <p className="mt-3 text-gray-600">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </section>

      {/* PROCESS SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 bg-green-700 text-white py-16 px-6"
      >
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold">
            How Our Process Works
          </h2>

          <div className="mt-10 grid md:grid-cols-4 gap-6">

            {[
              ["1. Collection", "Waste is collected from communities and institutions."],
              ["2. Sorting", "Materials are separated at our facility."],
              ["3. Recycling", "Waste is processed into reusable materials."],
              ["4. Impact", "Products, jobs, and environmental benefits are created."]
            ].map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-4 rounded-xl bg-white/10 backdrop-blur"
              >
                <h3 className="text-xl font-bold">{step[0]}</h3>
                <p className="text-sm mt-2 text-green-100">
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
        className="text-center py-20 px-6"
      >
        <h2 className="text-3xl font-bold text-green-700">
          Need Waste Management Solutions?
        </h2>

        <p className="mt-4 text-gray-600">
          Partner with ELDOPLY MRF to build a cleaner, greener future.
        </p>

        <button className="mt-6 bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition">
          Contact Us
        </button>
      </motion.section>

    </div>
  );
}