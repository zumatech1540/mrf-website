import { motion } from "framer-motion";

<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
></motion.section>

export default function Services() {
  return (
    <div className="pt-24 pb-20 bg-gray-50">
      {/* HERO */}
      <section className="text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700">
          Our Services
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          We provide end-to-end Material Recovery Facility (MRF) solutions that
          transform waste into valuable resources through collection, sorting,
          recycling, and eco-friendly manufacturing.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="mt-16 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-green-700">
            Waste Collection
          </h2>
          <p className="mt-3 text-gray-600">
            We collect waste from households, schools, businesses, and
            institutions using structured and efficient collection systems.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-green-700">
            Sorting & Processing
          </h2>
          <p className="mt-3 text-gray-600">
            At our Material Recovery Facility, waste is carefully sorted into
            recyclable categories for efficient processing and reuse.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-green-700">
            Recycling & Recovery
          </h2>
          <p className="mt-3 text-gray-600">
            We convert waste materials into reusable raw materials for
            manufacturing and sustainable production.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-green-700">
            Eco-Friendly Manufacturing
          </h2>
          <p className="mt-3 text-gray-600">
            We produce sustainable products such as school furniture, beehives,
            and recycled wood products.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-green-700">
            Community Training
          </h2>
          <p className="mt-3 text-gray-600">
            We educate communities on waste management, recycling, and
            environmental conservation practices.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-bold text-green-700">
            Sustainability Consultancy
          </h2>
          <p className="mt-3 text-gray-600">
            We help organizations design and implement sustainable waste
            management systems.
          </p>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="mt-20 bg-green-700 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold">How Our Process Works</h2>

          <div className="mt-10 grid md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-xl font-bold">1. Collection</h3>
              <p className="text-sm mt-2 text-green-100">
                Waste is collected from communities and institutions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">2. Sorting</h3>
              <p className="text-sm mt-2 text-green-100">
                Materials are separated at our facility.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">3. Recycling</h3>
              <p className="text-sm mt-2 text-green-100">
                Waste is processed into reusable materials.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">4. Impact</h3>
              <p className="text-sm mt-2 text-green-100">
                Products and jobs are created for communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-3xl font-bold text-green-700">
          Need Waste Management Solutions?
        </h2>
        <p className="mt-4 text-gray-600">
          Partner with us to build a cleaner and more sustainable environment.
        </p>

        <button className="mt-6 bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800">
          Contact Us
        </button>
      </section>
    </div>
  );
}
