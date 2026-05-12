import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Products from "../pages/Products";
import Impact from "../pages/Impact";
import Gallery from "../pages/Gallery";
import Blog from "../pages/Blog";
import Resources from "../pages/Resources";
import Contact from "../pages/Contact";
import Partners from "../pages/Partners";


export default function AppRoutes() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Pages */}
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Products />} />
      <Route path="/impact" element={<Impact />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/partners" element={<Partners />} />

     
    </Routes>
  );
}