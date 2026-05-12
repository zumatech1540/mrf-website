import { motion } from "framer-motion";

import {
  FaCalendarAlt,
  FaArrowRight,
  FaRecycle,
  FaLeaf,
  FaUsers,
} from "react-icons/fa";

import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";

export default function Blog() {

  const posts = [
    {
      title: "The Future of Waste Management in Africa",
      desc: "Discover how modern Material Recovery Facilities are transforming African cities into cleaner, greener, and more sustainable urban environments.",
      image: blog1,
      category: "Sustainability",
      date: "May 2026",
      icon: <FaRecycle />,
    },

    {
      title: "Recycling & Circular Economy",
      desc: "Learn how waste materials are converted into reusable resources that support sustainable manufacturing and environmental conservation.",
      image: blog2,
      category: "Recycling",
      date: "April 2026",
      icon: <FaLeaf />,
    },

    {
      title: "Community Impact Stories",
      desc: "Explore inspiring stories from communities, youth groups, and collectors benefiting from environmental recovery initiatives.",
      image: blog3,
      category: "Community",
      date: "March 2026",
      icon: <FaUsers />,
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50 overflow-hidden">

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center px-6"
      >

        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
          BLOG & INSIGHTS
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Latest Sustainability
          <span className="text-green-700"> Stories & Insights</span>
        </h1>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          Explore the latest news, environmental insights, recycling trends,
          and community impact stories from ELDOPLY MRF and the world of
          sustainable waste management.
        </p>

      </motion.section>

      {/* FEATURED BLOG */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20 px-6"
      >

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-white rounded-[40px] overflow-hidden shadow-xl">

          {/* IMAGE */}
          <div className="overflow-hidden h-full">
            <img
              src={blog1}
              alt="Featured Blog"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>

          {/* CONTENT */}
          <div className="p-10 md:p-14">

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
              Featured Article
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 leading-tight">
              Building a Circular Economy Through Smart Waste Recovery
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Material Recovery Facilities are redefining environmental
              sustainability by transforming waste into economic opportunity,
              reducing pollution, and creating green jobs for communities.
            </p>

            <div className="mt-6 flex items-center gap-4 text-gray-500 text-sm">

              <div className="flex items-center gap-2">
                <FaCalendarAlt />
                <span>May 2026</span>
              </div>

              <span>•</span>

              <span>5 min read</span>

            </div>

            <button className="mt-8 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-full font-semibold transition duration-300 shadow-lg hover:shadow-xl">
              Read Full Article
            </button>

          </div>

        </div>

      </motion.section>

      {/* BLOG GRID */}
      <section className="mt-24 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-300"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">

                <img
                  src={post.image}
                  alt={post.title}
                  className="h-64 w-full object-cover hover:scale-110 transition duration-500"
                />

              </div>

              {/* CONTENT */}
              <div className="p-8">

                {/* CATEGORY */}
                <div className="flex items-center justify-between">

                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>

                  <div className="text-green-700 text-xl">
                    {post.icon}
                  </div>

                </div>

                {/* TITLE */}
                <h2 className="mt-6 text-2xl font-bold text-gray-900 leading-snug">
                  {post.title}
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {post.desc}
                </p>

                {/* FOOTER */}
                <div className="mt-6 flex items-center justify-between">

                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <FaCalendarAlt />
                    <span>{post.date}</span>
                  </div>

                  <button className="flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition">
                    Read More
                    <FaArrowRight />
                  </button>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </section>

      {/* NEWSLETTER */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-24 px-6"
      >

        <div className="max-w-5xl mx-auto bg-gradient-to-r from-green-700 to-green-800 rounded-[40px] p-12 text-center text-white shadow-2xl">

          <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
            STAY UPDATED
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
            Subscribe to Sustainability Updates
          </h2>

          <p className="mt-6 text-green-100 text-lg max-w-3xl mx-auto leading-relaxed">
            Get the latest environmental insights, recycling news, community
            stories, and sustainability resources delivered directly to your inbox.
          </p>

          {/* FORM */}
          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

            <input
              type="email"
              placeholder="Enter your email address"
              className="px-6 py-4 rounded-full w-full md:w-[400px] text-gray-800 outline-none"
            />

            <button className="bg-white text-green-700 hover:bg-green-50 px-8 py-4 rounded-full font-semibold transition duration-300 shadow-lg">
              Subscribe
            </button>

          </div>

        </div>

      </motion.section>

    </div>
  );
}