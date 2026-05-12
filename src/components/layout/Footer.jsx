export default function Footer() {
  return (
    <footer className="bg-green-900 text-white pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* COMPANY INFO */}
        <div>
          <h2 className="text-2xl font-bold">WARENG MRF</h2>
          <p className="mt-4 text-gray-200 text-sm leading-relaxed">
            Transforming waste into wealth through innovative recycling,
            material recovery, and sustainable community empowerment.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Products</li>
            <li>Impact</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-200">
            <li>Waste Collection</li>
            <li>Sorting & Recycling</li>
            <li>Material Recovery</li>
            <li>Eco Products</li>
            <li>Community Training</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>

          <p className="text-gray-200 text-sm">
            Nairobi, Kenya
          </p>

          <p className="text-gray-200 text-sm mt-2">
            Email: info@mrf.co.ke
          </p>

          <p className="text-gray-200 text-sm mt-2">
            Phone: +254 700 000 000
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-green-700 mt-10 pt-6 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} WARENG MRF. All rights reserved.
      </div>
    </footer>
  );
}