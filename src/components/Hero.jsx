const Hero = () => {
  return (
    <section
      id="home"
      className="pt-28 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-b from-dark to-primary">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-light leading-[1.2] mb-6 animate-fade-in">
              Tăng <span className="text-accent font-bold">70%</span> Doanh Thu
              Và Tiết Kiệm <span className="text-accent font-bold">60%</span>{" "}
              Thời Gian Vận Hành{" "}
              <span className="text-accent font-bold">
                Bằng SEO Google Maps Và Automation
              </span>
            </h1>

            <p className="text-lg text-light/80 mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in animation-delay-200">
              iTWe là đơn vị chuyên cung cấp các dịch vụ marketing giúp các cửa
              hàng và doanh nghiệp có thể tiết kiệm chi phí nhưng đảm bảo mang
              về lợi nhuận và doanh thu cao. Ngoài ra iTWe còn cung cấp các giải
              pháp dành cho doanh nghiệp để tiết kiệm tối đa thời gian vận hành
            </p>

            <ul className="space-y-3 mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in animation-delay-200">
              <li className="flex items-center gap-3 text-light/90">
                <svg
                  className="w-5 h-5 text-accent flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                SEO Google Maps & Local SEO
              </li>
              <li className="flex items-center gap-3 text-light/90">
                <svg
                  className="w-5 h-5 text-accent flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Thiết kế Website/Landing Page chuyên nghiệp
              </li>
              <li className="flex items-center gap-3 text-light/90">
                <svg
                  className="w-5 h-5 text-accent flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Ads Google & Facebook
              </li>
              <li className="flex items-center gap-3 text-light/90">
                <svg
                  className="w-5 h-5 text-accent flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Tự động hóa quy trình làm việc bằng các công cụ AI hiện đại
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-400">
              <button className="btn btn-primary">Bắt Đầu Ngay</button>
              <button className="btn btn-outline">Tìm Hiểu Thêm</button>
            </div>
          </div>

          <div className="lg:w-1/2 animate-fade-in animation-delay-600">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-accent via-accent/50 to-accent/20 blur-xl opacity-70"></div>
              <div className="relative aspect-video bg-dark rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Bảng điều khiển Digital Marketing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
