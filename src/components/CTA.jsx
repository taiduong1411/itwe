const CTA = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-full h-full bg-accent/5 -z-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2338bdf8' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}></div>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-light mb-6">
              Sẵn Sàng Nâng Tầm Thương Hiệu Của Bạn?
            </h2>
            <p className="text-light/70 mb-8">
              Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí về cách
              ITWe có thể giúp doanh nghiệp của bạn phát triển mạnh mẽ hơn.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-light/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Tư vấn chiến lược miễn phí
              </li>
              <li className="flex items-center text-light/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Báo giá chi tiết trong 24 giờ
              </li>
              <li className="flex items-center text-light/70">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Giải pháp tùy chỉnh cho doanh nghiệp của bạn
              </li>
            </ul>
          </div>

          <div className="bg-dark/50 backdrop-blur-md p-8 rounded-xl max-w-md mx-auto animate-fade-in animation-delay-300">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Họ Tên Của Bạn"
                  className="w-full px-4 py-3 bg-dark/50 rounded-md border border-light/20 text-light focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Của Bạn"
                  className="w-full px-4 py-3 bg-dark/50 rounded-md border border-light/20 text-light focus:outline-none focus:border-accent"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 bg-dark/50 rounded-md border border-light/20 text-light/70 focus:outline-none focus:border-accent appearance-none">
                  <option value="">Chọn Dịch Vụ</option>
                  <option value="maps-seo">SEO Google Maps</option>
                  <option value="web-design">Thiết Kế Website</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="brand-strategy">Tự Động Hóa</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Hãy cho chúng tôi biết về dự án của bạn"
                  rows="4"
                  className="w-full px-4 py-3 bg-dark/50 rounded-md border border-light/20 text-light focus:outline-none focus:border-accent"></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn bg-accent hover:bg-accent/90 text-white transition-all">
                Bắt Đầu Ngay
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
