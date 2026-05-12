import { motion } from "framer-motion";

const images = [
  { src: "/images/gallery/waste-collection.jpg", title: "Waste Collection" },
  { src: "/images/gallery/sorting-facility.jpg", title: "Sorting Facility" },
  { src: "/images/gallery/recycling-process.jpg", title: "Recycling Process" },
  { src: "/images/gallery/community-training.jpg", title: "Community Training" },
  { src: "/images/gallery/eco-products.jpg", title: "Eco Products" },
  { src: "/images/gallery/team-work.jpg", title: "Team Work" },
  { src: "/images/gallery/school-support.jpg", title: "School Support" },
  { src: "/images/gallery/environment-cleanup.jpg", title: "Environmental Cleanup" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

export default function Gallery() {
  return (
    <div className="pt-24 pb-20 bg-gray-50">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center px-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-green-700">
          Our Gallery
        </h1>

        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          A visual journey of our impact in waste recovery, recycling innovation,
          and community empowerment across Kenya.
        </p>
      </motion.section>

      {/* GRID */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="mt-16 px-6 max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-2xl shadow-md bg-white"
          >

            {/* IMAGE */}
            <img
              src={img.src}
              alt={img.title}
              className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition duration-300" />

            {/* TITLE */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-white font-semibold text-sm">
                {img.title}
              </h3>
            </div>

          </motion.div>
        ))}
      </motion.section>

      {/* IMPACT SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 bg-green-700 text-white py-16 px-6 text-center"
      >
        <h2 className="text-3xl font-bold">
          Real Work. Real Impact.
        </h2>

        <p className="mt-4 text-green-100 max-w-2xl mx-auto">
          Every image reflects our mission to transform waste into value,
          create jobs, and build a cleaner environment.
        </p>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 text-center px-6"
      >
        <h2 className="text-3xl font-bold text-green-700">
          Visit Our Facility
        </h2>

        <p className="mt-4 text-gray-600">
          See how ELDOPLY MRF transforms waste into wealth in real time.
        </p>

        <button className="mt-6 bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition hover:scale-105">
          Contact Us
        </button>
      </motion.section>

    </div>
  );
}