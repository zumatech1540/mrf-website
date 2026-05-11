export default function Contact() {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* HERO */}
      <section className="text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700">
          Contact Us
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Get in touch with ELDOPLY MRF for partnerships, waste collection
          services, or sustainability solutions. We are ready to support your
          environmental goals.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section className="mt-16 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* CONTACT INFO */}
        <div className="bg-green-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-green-700">Get In Touch</h2>

          <div className="mt-6 space-y-4 text-gray-700">
            <p><strong>Location:</strong> Nairobi, Kenya</p>
            <p><strong>Email:</strong> info@eldoply.co.ke</p>
            <p><strong>Phone:</strong> +254 700 000 000</p>
            <p><strong>Working Hours:</strong> Mon - Fri (8:00 AM - 5:00 PM)</p>
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/254700000000"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* FORM */}
        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-green-700">Send Message</h2>

          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border p-3 rounded-lg"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="mt-16 px-6 max-w-6xl mx-auto">
        <div className="bg-gray-200 h-80 rounded-xl flex items-center justify-center">
          <p className="text-gray-600">Google Map Location Placeholder</p>
        </div>
      </section>
    </div>
  );
}
