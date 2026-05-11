export default function Blog() {
  const posts = [
    {
      title: "The Future of Waste Management in Africa",
      desc: "How modern Material Recovery Facilities are transforming cities into cleaner environments.",
    },
    {
      title: "Recycling & Circular Economy",
      desc: "Understanding how waste becomes raw material in sustainable production systems.",
    },
    {
      title: "Community Impact Stories",
      desc: "Real stories from people benefiting from waste recovery programs.",
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50 px-6">
      
      {/* HEADER */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-700">
          MRF Blog
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Insights, updates, and stories about waste management, recycling,
          and sustainability.
        </p>
      </div>

      {/* BLOG GRID */}
      <div className="mt-12 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {posts.map((post, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-6"
          >
            <h2 className="text-xl font-bold text-green-700">
              {post.title}
            </h2>
            <p className="mt-3 text-gray-600">
              {post.desc}
            </p>

            <button className="mt-4 text-green-700 font-semibold hover:underline">
              Read More →
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}