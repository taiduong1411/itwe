const services = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    title: "SEO Google Maps",
    description:
      "Tăng cường khả năng hiển thị địa phương với dịch vụ SEO Google Maps chuyên nghiệp. Chúng tôi tối ưu hóa hồ sơ doanh nghiệp của bạn để xuất hiện trong tìm kiếm địa phương.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
    title: "Thiết Kế Website",
    description:
      "Tạo ra những trang web đẹp mắt, tương thích với thương hiệu của bạn. Chúng tôi tập trung vào trải nghiệm người dùng, hiệu suất và thiết kế tối ưu hóa chuyển đổi.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
    title: "Digital Marketing",
    description:
      "Chiến lược digital marketing toàn diện bao gồm SEO, marketing mạng xã hội, chiến dịch email và marketing nội dung.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
    title: "Chiến Lược Thương Hiệu",
    description:
      "Phát triển nhận diện và chiến lược thương hiệu hấp dẫn, phù hợp với đối tượng mục tiêu và giúp bạn nổi bật giữa các đối thủ cạnh tranh.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-primary">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            Chúng tôi cung cấp nhiều dịch vụ kỹ thuật số toàn diện để giúp doanh
            nghiệp của bạn phát triển mạnh mẽ trên môi trường trực tuyến
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg p-6 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 hover:translate-y-[-5px] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-accent mb-5">{service.icon}</div>
              <h3 className="text-xl font-semibold text-light mb-3">
                {service.title}
              </h3>
              <p className="text-light/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
