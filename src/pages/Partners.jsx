import { motion } from "framer-motion";

import govt1 from "../assets/govt1.jpg";
import govt2 from "../assets/govt2.jpg";

import private1 from "../assets/private1.jpg";
import private2 from "../assets/private2.jpg";
import private3 from "../assets/private3.jpg";

import ngo1 from "../assets/ngo1.jpg";
import ngo2 from "../assets/ngo2.jpg";

import recycler1 from "../assets/recycler1.jpg";
import recycler2 from "../assets/recycler2.jpg";

import community1 from "../assets/community1.jpg";
import community2 from "../assets/community2.jpg";

const partnersData = [
  {
    category: "Government & Regulatory Partners",
    description:
      "Collaborating with county and national agencies to advance sustainable waste management and environmental compliance.",
    partners: [
      {
        name: "Uasin Gishu County Government",
        logo: govt1,
      },
      {
        name: "Environmental Management Authority",
        logo: govt2,
      },
    ],
  },

  {
    category: "Private Sector & Manufacturing",
    description:
      "Working with industries and manufacturers to supply recyclable raw materials and promote circular economy solutions.",
    partners: [
      {
        name: "Eco Industries Ltd",
        logo: private1,
      },
      {
        name: "Green Plastics Kenya",
        logo: private2,
      },
      {
        name: "Sustainable Packaging Africa",
        logo: private3,
      },
    ],
  },

  {
    category: "NGOs & Development Organizations",
    description:
      "Partnering with environmental and development organizations to expand climate action and community empowerment programs.",
    partners: [
      {
        name: "Clean Earth Foundation",
        logo: ngo1,
      },
      {
        name: "Green Future Initiative",
        logo: ngo2,
      },
    ],
  },

  {
    category: "Recycling & Recovery Networks",
    description:
      "Strengthening recycling ecosystems through partnerships with processors, recyclers, and recovery companies.",
    partners: [
      {
        name: "Recycle Hub Africa",
        logo: recycler1,
      },
      {
        name: "Waste Recovery Group",
        logo: recycler2,
      },
    ],
  },

  {
    category: "Community & Education Partners",
    description:
      "Supporting youth groups, schools, and local communities through training, waste collection, and sustainability programs.",
    partners: [
      {
        name: "Eldoret Youth Green Network",
        logo: community1,
      },
      {
        name: "Green Schools Initiative",
        logo: community2,
      },
    ],
  },
];

export default function Partners() {
  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center px-6"
      >

        <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
          STRATEGIC PARTNERSHIPS
        </span>

        <h1 className="mt-8 text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Partnerships Driving
          <span className="block text-green-700">
            Sustainable Impact
          </span>
        </h1>

        <p className="mt-6 text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
          Wareng Material Recovery Facility collaborates with governments,
          industries, recyclers, NGOs, and communities to strengthen recycling
          systems, create green jobs, and accelerate Kenya’s transition toward
          a circular economy.
        </p>

      </motion.section>

      {/* STATS */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 px-6"
      >

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white rounded-2xl shadow-sm p-8 text-center border border-gray-100">
            <h2 className="text-4xl font-bold text-green-700">20+</h2>
            <p className="mt-2 text-gray-600">Active Partners</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 text-center border border-gray-100">
            <h2 className="text-4xl font-bold text-green-700">65K+</h2>
            <p className="mt-2 text-gray-600">KG Waste Recovered</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 text-center border border-gray-100">
            <h2 className="text-4xl font-bold text-green-700">40+</h2>
            <p className="mt-2 text-gray-600">Collectors Supported</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 text-center border border-gray-100">
            <h2 className="text-4xl font-bold text-green-700">KES 4.5M</h2>
            <p className="mt-2 text-gray-600">Annual Sales Revenue</p>
          </div>

        </div>

      </motion.section>

      {/* PARTNER SECTIONS */}
      <section className="mt-24 px-6 max-w-7xl mx-auto space-y-24">

        {partnersData.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            {/* CATEGORY HEADER */}
            <div className="text-center max-w-3xl mx-auto">

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {group.category}
              </h2>

              <div className="w-24 h-1 bg-green-700 mx-auto mt-4 rounded-full"></div>

              <p className="mt-6 text-gray-600 leading-relaxed">
                {group.description}
              </p>

            </div>

            {/* GRID */}
            <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

              {group.partners.map((partner, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -10,
                    scale: 1.03,
                  }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300 text-center relative overflow-hidden"
                >

                  {/* TOP GLOW */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-green-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>

                  {/* LOGO */}
                  <div className="w-28 h-28 mx-auto rounded-2xl bg-gray-50 flex items-center justify-center p-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full object-contain transition duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* NAME */}
                  <h3 className="mt-6 font-bold text-gray-800 text-lg">
                    {partner.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Strategic Sustainability Partner
                  </p>

                </motion.div>
              ))}

            </div>

          </motion.div>
        ))}

      </section>

      {/* IMPACT STRIP */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-28 bg-green-700 text-white py-20 px-6"
      >

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Strong Partnerships.
            <span className="block text-green-100">
              Real Environmental Impact.
            </span>
          </h2>

          <p className="mt-6 text-green-100 text-lg leading-relaxed max-w-3xl mx-auto">
            Through collaboration, innovation, and shared responsibility,
            Wareng MRF is transforming waste into economic opportunity while
            reducing environmental pollution across communities in Kenya.
          </p>

        </div>

      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 text-center px-6"
      >

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-12 border border-gray-100">

          <h2 className="text-4xl font-bold text-gray-900">
            Become a Sustainability Partner
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Join Wareng Material Recovery Facility in building cleaner cities,
            empowering communities, and advancing circular economy solutions
            through impactful partnerships.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 bg-green-700 text-white px-10 py-4 rounded-full font-semibold hover:bg-green-800 transition duration-300 shadow-lg hover:scale-105"
          >
            Partner With Us
          </a>

        </div>

      </motion.section>

    </div>
  );
}