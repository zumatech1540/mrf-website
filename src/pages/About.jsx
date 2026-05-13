import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-white text-gray-800 overflow-hidden pt-20">

      {/* HERO SECTION */}
      <section className="relative py-28 px-6 bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white">

        <div className="max-w-6xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
              ABOUT WARENG MRF
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
              Transforming Waste Into Sustainable Opportunity
            </h1>

            <p className="mt-8 max-w-4xl mx-auto text-lg text-green-100 leading-relaxed">
              Wareng Material Recovery Facility (MRF) is a leading waste
              aggregation and recycling center based in Outspan, Eldoret,
              dedicated to advancing Kenya’s circular economy through
              sustainable material recovery, recycling, and community
              empowerment.
            </p>

          </motion.div>

        </div>

      </section>

      {/* COMPANY STORY */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 px-6"
      >

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              OUR STORY
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              From Local Enterprise to Circular Economy Leader
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              Wareng Material Recovery Facility traces its roots to a modest
              timber and wood workshop operation serving local construction and
              carpentry needs in Eldoret. Over time, the organization evolved
              into a sustainability-focused enterprise dedicated to responsible
              waste management and material recovery.
            </p>

            <p className="mt-5 text-gray-600 leading-relaxed">
              Today, Wareng MRF serves as a vital bridge between waste producers
              and recycling industries by collecting, sorting, processing, and
              supplying recoverable materials to manufacturers and recyclers.
              Our work supports cleaner communities, job creation, climate
              action, and resource efficiency across Kenya.
            </p>

            <p className="mt-5 text-gray-600 leading-relaxed">
              By diverting waste from landfills and transforming discarded
              materials into valuable resources, we are helping shape a greener,
              cleaner, and more sustainable future for generations to come.
            </p>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <img
              src="/src/assets/community.jpg"
              alt="Wareng Material Recovery Facility"
              className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
            />

            <div className="absolute -bottom-8 -left-8 bg-green-700 text-white p-8 rounded-3xl shadow-2xl w-64">

              <h3 className="text-4xl font-bold">
                65K+
              </h3>

              <p className="mt-3 text-green-100">
                Kilograms of waste processed in 2024
              </p>

            </div>

          </div>

        </div>

      </motion.section>

      {/* VISION & MISSION */}
      <section className="py-24 px-6 bg-gray-50">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition"
          >

            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl">
              🌍
            </div>

            <h3 className="mt-6 text-3xl font-bold text-gray-900">
              Our Vision
            </h3>

            <p className="mt-5 text-gray-600 leading-relaxed text-lg">
              To be a national leader in sustainable material recovery, driving innovation and circular
                economy practices across Kenya.
            </p>

          </motion.div>

          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition"
          >

            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl">
              ♻️
            </div>

            <h3 className="mt-6 text-3xl font-bold text-gray-900">
              Our Mission
            </h3>

            <p className="mt-5 text-gray-600 leading-relaxed text-lg">
              To recover, process, and repurpose waste responsibly, generating value for communities,
                industries, and the environment.
            </p>

          </motion.div>

        </div>

      </section>

      {/* CORE VALUES */}
      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto text-center">

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            OUR VALUES
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Principles That Drive Our Work
          </h2>

          <div className="mt-16 grid md:grid-cols-4 gap-8">

            {/* VALUE */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-3xl border hover:border-green-500 transition"
            >

              <div className="text-5xl">🌱</div>

              <h3 className="mt-6 text-2xl font-bold">
                Sustainability
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Championing responsible waste management practices that protect
                the environment and conserve resources.
              </p>

            </motion.div>

            {/* VALUE */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-3xl border hover:border-green-500 transition"
            >

              <div className="text-5xl">💡</div>

              <h3 className="mt-6 text-2xl font-bold">
                Innovation
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Exploring modern recycling technologies and creative recovery
                solutions for maximum resource utilization.
              </p>

            </motion.div>

            {/* VALUE */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-3xl border hover:border-green-500 transition"
            >

              <div className="text-5xl">🤝</div>

              <h3 className="mt-6 text-2xl font-bold">
                Integrity
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Building transparent and trustworthy partnerships with
                communities, businesses, and stakeholders.
              </p>

            </motion.div>

            {/* VALUE */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-3xl border hover:border-green-500 transition"
            >

              <div className="text-5xl">👨‍👩‍👧‍👦</div>

              <h3 className="mt-6 text-2xl font-bold">
                Community Empowerment
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Empowering local communities and waste collectors through
                economic opportunities and environmental education.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* PERFORMANCE SNAPSHOT */}
      <section className="py-24 px-6 bg-green-700 text-white">

        <div className="max-w-7xl mx-auto text-center">

          <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
            PERFORMANCE SNAPSHOT 2024
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold">
            Delivering Real Environmental Impact
          </h2>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10">

            <div>
              <h3 className="text-5xl font-bold">
                65K+
              </h3>

              <p className="mt-3 text-green-100">
                KG Waste Processed
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">
                KES 4.5M
              </h3>

              <p className="mt-3 text-green-100">
                Sales Revenue
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">
                KES 800K
              </h3>

              <p className="mt-3 text-green-100">
                Net Profit
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold">
                40+
              </h3>

              <p className="mt-3 text-green-100">
                Local Collectors Supported
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* STRATEGIC PRIORITIES */}
      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              FUTURE PLANS
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
              Strategic Priorities 2025–2027
            </h2>

          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">

            <div className="bg-gray-50 p-8 rounded-3xl border">
              <h3 className="text-2xl font-bold text-green-700">
                Upgrade Processing Capacity
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Investing in automated sorting systems, shredders, and advanced
                recycling technologies to increase efficiency and scale
                operations.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border">
              <h3 className="text-2xl font-bold text-green-700">
                Organic Waste Recovery
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Expanding composting and biogas partnerships to unlock value
                from food and agricultural waste streams.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border">
              <h3 className="text-2xl font-bold text-green-700">
                Market Expansion
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Strengthening long-term supply partnerships with recyclers and
                manufacturers across Kenya and East Africa.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border">
              <h3 className="text-2xl font-bold text-green-700">
                Climate & Community Impact
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Expanding landfill diversion efforts to exceed 100,000 KG
                annually while supporting community livelihoods and emissions
                reduction.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gray-50 text-center">

        <div className="max-w-4xl mx-auto">

          <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
            PARTNER WITH US
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
            Let’s Build a Greener Kenya Together
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Wareng MRF collaborates with industries, communities, recyclers,
            institutions, and development partners to create sustainable waste
            management solutions for a cleaner future.
          </p>

          <button className="mt-10 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold transition">
            Contact Us
          </button>

        </div>

      </section>

    </div>
  );
}