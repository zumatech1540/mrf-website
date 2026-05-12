export default function Products() {
  return (
    <div className="pt-24 pb-20 bg-gray-50">
      {/* HERO */}
      <section className="text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700">
          Eco-Friendly Products
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          At  MRF, we transform recovered waste materials into valuable,
          durable, and sustainable products that support schools, communities,
          and green living.
        </p>
      </section>

      {/* PRODUCTS GRID */}
      <section className="mt-16 px-6 max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Product 1 */}
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
          <img
            src="/src/assets/desks.jpg"
            alt="Recycled School Desks"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-green-700">
              Recycled School Desks
            </h2>
            <p className="mt-2 text-gray-600">
              Durable classroom desks made from processed recycled wood and
              plastic materials.
            </p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
          <img
            src="/src/assets/chairs.jpg"
            alt="Eco Chairs"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-green-700">
              Eco-Friendly Chairs
            </h2>
            <p className="mt-2 text-gray-600">
              Comfortable and strong chairs made from recycled waste materials
              for schools and offices.
            </p>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
          <img
            src="/src/assets/beehives.jpg"
            alt="Beehives"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-green-700">
              Sustainable Beehives
            </h2>
            <p className="mt-2 text-gray-600">
              Eco-friendly beehives designed to support agriculture and promote
              environmental biodiversity.
            </p>
          </div>
        </div>

        {/* Product 4 */}
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
          <img
            src="/src/assets/wood.jpg"
            alt="Recycled Timber"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-green-700">
              Recycled Timber
            </h2>
            <p className="mt-2 text-gray-600">
              Processed wood materials reused for construction and carpentry
              projects.
            </p>
          </div>
        </div>

        {/* Product 5 */}
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
          <img
            src="/src/assets/eco-bricks.jpg"
            alt="Eco Bricks"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-green-700">
              Eco Bricks
            </h2>
            <p className="mt-2 text-gray-600">
              Solid construction bricks made from compressed and recycled waste
              materials.
            </p>
          </div>
        </div>

        {/* Product 6 */}
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
          <img
            src="/src/assets/decor.jpg"
            alt="Eco Decor"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-green-700">
              Eco Home Decor
            </h2>
            <p className="mt-2 text-gray-600">
              Beautiful handmade decorations crafted from recycled and recovered
              materials.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="mt-20 bg-green-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold">How We Create Our Products</h2>

        <div className="mt-10 grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div>
            <h3 className="font-bold text-xl">Collection</h3>
            <p className="text-sm mt-2 text-green-100">
              Waste materials are collected from communities and institutions.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl">Sorting</h3>
            <p className="text-sm mt-2 text-green-100">
              Materials are sorted at our recovery facility.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl">Processing</h3>
            <p className="text-sm mt-2 text-green-100">
              Waste is converted into reusable raw materials.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl">Manufacturing</h3>
            <p className="text-sm mt-2 text-green-100">
              Final eco-products are produced for communities and schools.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 text-center px-6">
        <h2 className="text-3xl font-bold text-green-700">
          Support Sustainable Products
        </h2>
        <p className="mt-4 text-gray-600">
          Partner with us to promote eco-friendly manufacturing and circular
          economy solutions.
        </p>

        <button className="mt-6 bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800">
          Partner With Us
        </button>
      </section>
    </div>
  );
}
