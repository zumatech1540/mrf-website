import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">

      {/* BACKGROUND IMAGE (FIXED PATH ISSUE) */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: "url('/src/assets/hero.jpg')" }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* FLOATING BUBBLES (REAL ANIMATION) */}
      <div className="absolute inset-0 overflow-hidden">

        <span className="bubble w-32 h-32 top-10 left-10" />
        <span className="bubble w-24 h-24 top-40 right-20" />
        <span className="bubble w-40 h-40 bottom-20 left-1/4" />
        <span className="bubble w-20 h-20 bottom-32 right-1/3" />

      </div>

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
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Innovating Resource Recovery for a {" "}
          <span className="text-green-400">Greener Future</span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          variants={item}
          className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto"
        >
          Innovating waste recovery through collection, sorting, recycling, and
          eco-friendly production for a cleaner and greener Kenya.
        </motion.p>

        {/* BUTTONS (FIXED NAVIGATION) */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-col md:flex-row gap-4 justify-center"
        >
          <a href="/contact">
            <button className="bg-green-500 hover:bg-green-600 px-7 py-3 rounded-full font-semibold transition-transform hover:scale-105 shadow-lg">
              Partner With Us
            </button>
          </a>

          <a href="/services">
            <button className="border border-white px-7 py-3 rounded-full hover:bg-white hover:text-black transition-transform hover:scale-105">
              Learn More
            </button>
          </a>
        </motion.div>

        

      </motion.div>

      {/* BUBBLE ANIMATION CSS (INLINE FIX - NO index.css NEEDED) */}
      <style>{`
        .bubble {
          position: absolute;
          border-radius: 9999px;
          background: rgba(34,197,94,0.25);
          backdrop-filter: blur(8px);
          animation: float 8s infinite ease-in-out;
        }

        .bubble:nth-child(1) { animation-delay: 0s; }
        .bubble:nth-child(2) { animation-delay: 1s; }
        .bubble:nth-child(3) { animation-delay: 2s; }
        .bubble:nth-child(4) { animation-delay: 3s; }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

    </section>
  );
}