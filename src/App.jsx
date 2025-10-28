import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-peach-50">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}
