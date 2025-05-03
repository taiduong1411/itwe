import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <a href="#" className="logo-container inline-block">
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
            <p className="text-light/70">
              Marketing tiết kiệm - Tăng doanh thu - Giảm thời gian vận hành.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61574708043897"
                className="text-light/70 hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              {/* <a
                href="#"
                className="text-light/70 hover:text-accent transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a> */}
              <a
                href="https://www.instagram.com/itwe.technology/"
                className="text-light/70 hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* <a
                href="#"
                className="text-light/70 hover:text-accent transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a> */}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-light mb-4">
              Liên Kết Nhanh
            </h3>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-light/70 hover:text-accent transition-colors">
                    Trang Chủ
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-light/70 hover:text-accent transition-colors">
                    Dịch Vụ
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-light/70 hover:text-accent transition-colors">
                    Giới Thiệu
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="text-light/70 hover:text-accent transition-colors">
                    Dự Án
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-light/70 hover:text-accent transition-colors">
                    Liên Hệ
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-light mb-4">Dịch Vụ</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-light/70 hover:text-accent transition-colors">
                  SEO Google Maps
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-light/70 hover:text-accent transition-colors">
                  Thiết Kế Website
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-light/70 hover:text-accent transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-light/70 hover:text-accent transition-colors">
                  Tự động hóa quy trình
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-light mb-4">
              Thông Tin Liên Hệ
            </h3>
            <address className="not-italic text-light/70 space-y-3">
              <p className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 mt-0.5 text-accent"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                451/38 Xô Viết Nghệ Tĩnh, phường 26, Bình Thạnh, Hồ Chí Minh
              </p>
              <p className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 mt-0.5 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v4"
                  />
                </svg>
                <a
                  href="mailto:itwe.technology.marketing@gmail.com"
                  className="hover:text-accent transition-colors">
                  itwe.technology.marketing@gmail.com
                </a>
              </p>
              <p className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 mt-0.5 text-accent"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a
                  href="tel:0386296248"
                  className="hover:text-accent transition-colors">
                  0386296248
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-light/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light/50 text-sm">
            © 2023 ITWe. Đã đăng ký bản quyền.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-light/50">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Chính Sách Bảo Mật
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Điều Khoản Dịch Vụ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Chính Sách Cookie
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
