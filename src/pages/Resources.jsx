export default function Resources() {
  const resources = [
    {
      title: "Waste Management Guide",
      desc: "A complete guide on how communities can manage and reduce waste effectively.",
      type: "PDF Guide",
    },
    {
      title: "Recycling Best Practices",
      desc: "Standards and methods used in modern Material Recovery Facilities.",
      type: "Article",
    },
    {
      title: "Community Training Manual",
      desc: "Training material for waste collectors and community educators.",
      type: "Manual",
    },
    {
      title: "Sustainability Handbook",
      desc: "Understanding circular economy and environmental conservation.",
      type: "eBook",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50 px-6">

      {/* HEADER */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-700">
          MRF Resources Center
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Access guides, training materials, and educational resources about
          waste management, recycling, and sustainability.
        </p>
      </div>

      {/* GRID */}
      <div className="mt-12 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {resources.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-6"
          >
            <span className="text-xs font-semibold text-green-700 uppercase">
              {item.type}
            </span>

            <h2 className="text-xl font-bold mt-2 text-gray-800">
              {item.title}
            </h2>

            <p className="mt-3 text-gray-600">
              {item.desc}
            </p>

            <button className="mt-4 text-green-700 font-semibold hover:underline">
              Download / View →
            </button>
          </div>
        ))}

      </div>

      {/* CTA SECTION */}
      <div className="mt-20 text-center bg-green-700 text-white py-16 px-6 rounded-xl max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold">
          Need Training or Collaboration?
        </h2>

        <p className="mt-4 text-green-100">
          We provide workshops, training programs, and partnerships for schools,
          organizations, and communities.
        </p>

        <button className="mt-6 bg-white text-green-700 px-6 py-3 rounded-full hover:bg-gray-100 transition">
          Contact Us
        </button>

      </div>

    </div>
  );
}