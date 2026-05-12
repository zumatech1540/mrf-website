import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Impact", path: "/impact" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Resources", path: "/resources" },
    { name: "Partners", path: "/partners" },   
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="src/assets/logo.jpg"
            alt="MRF Logo"
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-xl font-bold text-green-700 tracking-wide">
            WARENG MRF
          </h1>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6">

          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition duration-200 ${
                  isActive
                    ? "text-green-700 border-b-2 border-green-700 pb-1"
                    : "text-gray-700 hover:text-green-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

        </nav>

        {/* CTA BUTTON */}
        <div className="hidden md:flex items-center gap-3">

          <a
            href="/partners"
            className="text-sm font-medium text-green-700 hover:text-green-800 transition"
          >
            Become a Partner
          </a>

          <a
            href="/contact"
            className="bg-green-700 text-white px-5 py-2 rounded-full hover:bg-green-800 transition text-sm font-semibold"
          >
            Contact Us
          </a>

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-3">

          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-2 text-sm font-medium transition ${
                  isActive ? "text-green-700" : "text-gray-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <div className="pt-4 space-y-3">

            <a
              href="/partners"
              className="block text-center text-green-700 font-medium"
              onClick={() => setOpen(false)}
            >
              Become a Partner
            </a>

            <a
              href="/contact"
              className="block text-center bg-green-700 text-white py-2 rounded-full font-semibold"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </a>

          </div>

        </div>
      )}

    </header>
  );
}