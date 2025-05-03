import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import CustomerStories from "./components/CustomerStories";
import Portfolio from "./components/Portfolio";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import "./App.css";
import { useEffect } from "react";

function App() {
  // Đảm bảo lưu URL có hash (#) khi tải lại trang để người dùng quay lại đúng section
  useEffect(() => {
    // Xử lý khi có URL hash khi load trang
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        // Đảm bảo có delay nhỏ để trang load xong
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    };

    // Lắng nghe sự kiện hashchange
    window.addEventListener("hashchange", handleHashChange);
    // Xử lý khi trang mới được load
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="bg-dark text-light">
      <Navbar />
      <main id="content" role="main">
        <Hero />
        <Services />
        <Features />
        <CustomerStories />
        <Portfolio />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
