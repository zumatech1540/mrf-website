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
    category: "Government Partners",
    partners: [
      { name: "County Government", logo: govt1 },
      { name: "National Environment Authority", logo: govt2 },
    ],
  },

  {
    category: "Private Sector Partners",
    partners: [
      { name: "Eco Industries Ltd", logo: private1 },
      { name: "Green Plastics Kenya", logo: private2 },
      { name: "Sustainable Packaging Co.", logo: private3 },
    ],
  },

  {
    category: "NGO & Development Partners",
    partners: [
      { name: "Clean Earth Foundation", logo: ngo1 },
      { name: "Green Future Initiative", logo: ngo2 },
    ],
  },

  {
    category: "Recycling & Industry Partners",
    partners: [
      { name: "Recycle Hub Africa", logo: recycler1 },
      { name: "Waste Recovery Group", logo: recycler2 },
    ],
  },

  {
    category: "Community & Schools",
    partners: [
      { name: "Eldoret Youth Group", logo: community1 },
      { name: "Green Schools Network", logo: community2 },
    ],
  },
];

export default function Partners() {
  return (
    <div className="pt-24 pb-20 bg-gray-50 overflow-hidden">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center px-6"
      >
        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
          OUR PARTNERS
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl font-bold text-gray-900">
          Building a Sustainable Future
          <span className="text-green-700"> Together</span>
        </h1>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
          We collaborate with government agencies, private companies, NGOs,
          recyclers, and communities to drive environmental sustainability and
          circular economy solutions.
        </p>
      </motion.section>

      {/* PARTNERS LIST */}
      <section className="mt-20 px-6 max-w-7xl mx-auto space-y-20">

        {partnersData.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            {/* CATEGORY TITLE */}
            <h2 className="text-2xl font-bold text-green-700 mb-8 text-center">
              {group.category}
            </h2>

            {/* GRID */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

              {group.partners.map((partner, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
                >

                  {/* LOGO */}
                  <div className="w-24 h-24 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full object-contain"
                    />
                  </div>

                  {/* NAME */}
                  <h3 className="mt-4 font-semibold text-gray-800">
                    {partner.name}
                  </h3>

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
        className="mt-24 bg-green-700 text-white py-16 px-6 text-center"
      >

        <h2 className="text-3xl font-bold">
          Strong Partnerships, Real Impact
        </h2>

        <p className="mt-4 text-green-100 max-w-3xl mx-auto">
          Together with our partners, we are reducing waste, creating jobs,
          and building a cleaner and more sustainable Kenya.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          <div>
            <h3 className="text-4xl font-bold">20+</h3>
            <p className="text-green-100 mt-2">Active Partners</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">65K+</h3>
            <p className="text-green-100 mt-2">KG Waste Recovered</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">40+</h3>
            <p className="text-green-100 mt-2">Communities Supported</p>
          </div>

        </div>

      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 text-center px-6"
      >

        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl font-bold text-gray-900">
            Want to Become a Partner?
          </h2>

          <p className="mt-4 text-gray-600">
            Join us in driving environmental sustainability and circular economy
            solutions across Kenya and beyond.
          </p>

          <a
            href="/contact"
            className="inline-block mt-8 bg-green-700 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-800 transition"
          >
            Partner With Us
          </a>

        </div>

      </motion.section>

    </div>
  );
}