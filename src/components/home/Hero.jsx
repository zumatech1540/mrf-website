import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">

      {/* Background */}
      <img
        src="/hero.jpg"
        alt="MRF Waste Recovery"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl text-center px-6"
      >

        {/* TITLE */}
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Turning Waste Into{" "}
          <span className="text-green-400">Wealth</span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          variants={item}
          className="mt-6 text-lg md:text-xl text-gray-200"
        >
          Innovating waste recovery through collection, sorting, recycling, and
          eco-friendly production for a cleaner and greener future.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-col md:flex-row gap-4 justify-center"
        >
          <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full font-semibold transition-transform hover:scale-105">
            Partner With Us
          </button>

          <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-transform hover:scale-105">
            Learn More
          </button>
        </motion.div>

        {/* STATS */}
        <motion.div
          variants={item}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { value: "5,000+", label: "Tons Recycled" },
            { value: "2,000+", label: "Community Members" },
            { value: "100+", label: "Schools Supported" },
            { value: "50+", label: "Green Jobs" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-sm text-gray-300">{stat.label}</p>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}