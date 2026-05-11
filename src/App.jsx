import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Header */}
      <Navbar />

      {/* Pages */}
      <main className="min-h-screen">
        <AppRoutes />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}