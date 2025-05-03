import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/90 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}>
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center">
          <div className="logo-text flex items-center">
            <span className="relative text-[#39B3FF] text-2xl md:text-3xl font-bold">
              <span>i</span>
            </span>
            <span className="text-[#0066CC] text-2xl md:text-3xl font-bold">
              T
            </span>
            <span className="text-[#0066CC] text-2xl md:text-3xl font-bold">
              W
            </span>
            <span className="text-[#0066CC] text-2xl md:text-3xl font-bold">
              e
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            <li>
              <a
                href="#home"
                className="text-light hover:text-accent transition-colors">
                Trang Chủ
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-light hover:text-accent transition-colors">
                Dịch Vụ
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-light hover:text-accent transition-colors">
                Giới Thiệu
              </a>
            </li>
            <li>
              <a
                href="#stories"
                className="text-light hover:text-accent transition-colors">
                Khách Hàng
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-light hover:text-accent transition-colors">
                Dự Án
              </a>
            </li>
          </ul>
          <a href="#contact" className="btn btn-outline">
            Liên Hệ
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-light"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-md">
          <div className="container-custom py-6">
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="#home"
                  className="text-light hover:text-accent transition-colors block py-2">
                  Trang Chủ
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-light hover:text-accent transition-colors block py-2">
                  Dịch Vụ
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-light hover:text-accent transition-colors block py-2">
                  Giới Thiệu
                </a>
              </li>
              <li>
                <a
                  href="#stories"
                  className="text-light hover:text-accent transition-colors block py-2">
                  Khách Hàng
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-light hover:text-accent transition-colors block py-2">
                  Dự Án
                </a>
              </li>
            </ul>
            <a
              href="#contact"
              className="btn btn-outline mt-4 w-full block text-center">
              Liên Hệ
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
