export default function Impact() {
  return (
    <div className="pt-24 pb-20 bg-white">
      {/* HERO */}
      <section className="text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700">
          Our Impact
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          At ELDOPLY MRF, every action we take contributes to environmental
          protection, job creation, and sustainable community development.
        </p>
      </section>

      {/* STATS */}
      <section className="mt-16 bg-green-700 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h2 className="text-4xl font-bold">5,000+</h2>
            <p className="mt-2 text-green-100">Tons of Waste Recycled</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">2,000+</h2>
            <p className="mt-2 text-green-100">Community Members Empowered</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">100+</h2>
            <p className="mt-2 text-green-100">Schools Supported</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">50+</h2>
            <p className="mt-2 text-green-100">Green Jobs Created</p>
          </div>
        </div>
      </section>

      {/* IMPACT STORY */}
      <section className="mt-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-green-700">
            Transforming Communities
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Through our Material Recovery Facility, we have reduced environmental
            pollution while creating sustainable livelihoods. Waste that was once
            a burden is now a source of income, education materials, and eco-friendly
            products.
            <br /><br />
            Our model promotes circular economy principles where nothing is wasted
            and everything is reused or transformed into valuable resources.
          </p>
        </div>

        <img
          src="/images/impact/community.jpg"
          alt="Community Impact"
          className="rounded-xl shadow-lg"
        />
      </section>

      {/* BEFORE AFTER */}
      <section className="mt-20 bg-gray-50 py-16 px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-700">
            Before vs After MRF Intervention
          </h2>
        </div>

        <div className="mt-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-red-500">Before</h3>
            <ul className="mt-4 text-gray-600 space-y-2">
              <li>❌ Open dumping of waste</li>
              <li>❌ Environmental pollution</li>
              <li>❌ Unemployment in communities</li>
              <li>❌ Unsafe living conditions</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-green-700">After</h3>
            <ul className="mt-4 text-gray-600 space-y-2">
              <li>✅ Proper waste collection systems</li>
              <li>✅ Clean and safe environment</li>
              <li>✅ Job creation and empowerment</li>
              <li>✅ Recycling and resource recovery</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMMUNITY IMPACT */}
      <section className="mt-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-700">
          Community Success Stories
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">Waste Collectors</h3>
            <p className="mt-2 text-gray-600">
              Individuals now earn stable income through structured waste
              collection programs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">Schools</h3>
            <p className="mt-2 text-gray-600">
              Schools receive recycled desks, chairs, and learning materials.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold">Youth</h3>
            <p className="mt-2 text-gray-600">
              Young people gain skills in recycling, manufacturing, and green jobs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 text-center px-6">
        <h2 className="text-3xl font-bold text-green-700">
          Be Part of the Impact
        </h2>
        <p className="mt-4 text-gray-600">
          Join ELDOPLY MRF in building a cleaner, greener, and more sustainable future.
        </p>

        <button className="mt-6 bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800">
          Partner With Us
        </button>
      </section>
    </div>
  );
}
