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
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Gallery() {
  return (
    <div className="pt-24 pb-20 bg-gray-50">

      {/* HERO */}
      <section className="text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700">
          Our Gallery
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          A visual journey of our impact in waste management, recycling,
          community empowerment, and sustainable production.
        </p>
      </section>

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
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-xl overflow-hidden shadow hover:shadow-xl"
          >
            {/* IMAGE */}
            <img
              src={img.src}
              alt={img.title}
              className="h-48 w-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition flex items-end">
              <p className="text-white text-sm font-semibold p-4 opacity-0 hover:opacity-100 transition">
                {img.title}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* IMPACT STRIP */}
      <section className="mt-20 bg-green-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">Real Work. Real Impact.</h2>
        <p className="mt-4 text-green-100 max-w-2xl mx-auto">
          Every image represents our commitment to transforming waste into wealth
          and building sustainable communities.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-20 text-center px-6">
        <h2 className="text-3xl font-bold text-green-700">
          Want to Visit Our Facility?
        </h2>

        <p className="mt-4 text-gray-600">
          Partner with ELDOPLY MRF or schedule a visit to see our operations.
        </p>

        <button className="mt-6 bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition-transform hover:scale-105">
          Contact Us
        </button>
      </section>

    </div>
  );
}