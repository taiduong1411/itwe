import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import CustomerStories from "./components/CustomerStories";
import Portfolio from "./components/Portfolio";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="bg-dark text-light">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <CustomerStories />
      <Portfolio />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
