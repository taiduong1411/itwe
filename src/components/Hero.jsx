const Hero = () => {
  return (
    <section
      id="home"
      className="pt-28 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-b from-dark to-primary">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-light leading-tight mb-6 animate-fade-in">
              Nâng Tầm Sự Hiện Diện{" "}
              <span className="text-accent">Kỹ Thuật Số</span>
            </h1>

            <p className="text-lg text-light/80 mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in animation-delay-200">
              ITWe chuyên về SEO Google Maps, thiết kế website, digital
              marketing và các giải pháp toàn diện để nâng cao khả năng hiển thị
              trực tuyến của bạn.
            </p>

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
