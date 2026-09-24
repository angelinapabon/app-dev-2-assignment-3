import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header storeName="GadgetGrove" />

      {/* Hero Banner */}
      <Hero
        title="Discover Premium Tech"
        subtitle="Curated gadgets that elevate your everyday. Free shipping on orders over $50."
        ctaText="Shop the Collection"
        backgroundImage="https://placehold.co/1200x400/1d1d1f/ffffff?text=GadgetGrove+%7C+Premium+Tech"
      />

      {/* Products Section */}
      <main className="main-content" id="products">
        <h2 className="section-title">Featured Products</h2>
        <p className="section-subtitle">
          Hand-picked essentials for the modern tech enthusiast
        </p>

        <div className="products-grid">
          <ProductCard
            name="AeroBuds Pro"
            price={129.99}
            image="https://placehold.co/600x400/0071e3/ffffff?text=AeroBuds+Pro"
            description="Active noise cancellation, 30-hour battery, and crystal-clear calls in a sleek wireless design."
          />

          <ProductCard
            name="Pulse Watch X"
            price={249.00}
            image="https://placehold.co/600x400/34c759/ffffff?text=Pulse+Watch+X"
            description="Track fitness, sleep, and heart rate with a bright always-on display and week-long battery life."
          />

          <ProductCard
            name="ChargePod Ultra"
            price={59.99}
            image="https://placehold.co/600x400/ff9500/ffffff?text=ChargePod+Ultra"
            description="20,000mAh portable power bank with 65W fast charging and dual USB-C ports for all your devices."
          />
        </div>
      </main>

      {/* Footer */}
      <Footer
        storeName="GadgetGrove"
        email="hello@gadgetgrove.com"
        phone="(555) 123-4567"
        address="123 Innovation Ave, Tech City, TC 90210"
      />
    </div>
  );
}

export default App;