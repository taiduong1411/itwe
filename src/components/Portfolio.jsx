const Portfolio = () => {
  const projects = [
    {
      title: "Tối Ưu Google Maps - Nhà Hàng Biển Xanh",
      category: "SEO Google Maps",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "Tối ưu hiển thị cho nhà hàng hải sản trên Google Maps, tăng lượng đặt bàn 50% sau 3 tháng.",
    },
    {
      title: "Website Spa Làn Da Xinh",
      category: "Thiết Kế Website",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "Thiết kế website responsive với hệ thống đặt lịch trực tuyến, giúp tăng 30% lượt đặt lịch.",
    },
    {
      title: "Chiến Dịch Marketing - Khách Sạn Phương Đông",
      category: "Digital Marketing",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "Chiến dịch quảng cáo đa kênh giúp tăng tỷ lệ đặt phòng 40% trong mùa thấp điểm.",
    },
    {
      title: "Nhận Diện Thương Hiệu - Handmade Việt",
      category: "Chiến Lược Thương Hiệu",
      image:
        "https://images.unsplash.com/photo-1471421298428-1513ab720a8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "Thiết kế logo và nhận diện thương hiệu đồng bộ cho cửa hàng sản phẩm thủ công.",
    },
    {
      title: "SEO Google Maps - Phòng Khám Nha Khoa Tân Thành",
      category: "SEO Google Maps",
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "Tối ưu hồ sơ Google Business Profile, đưa phòng khám lên top kết quả tìm kiếm trong khu vực.",
    },
    {
      title: "Website Bán Hàng - Thời Trang Miền Bắc",
      category: "Thiết Kế Website",
      image:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description:
        "Thiết kế website thương mại điện tử với tính năng thanh toán trực tuyến và quản lý kho hàng.",
    },
  ];

  const categories = [...new Set(projects.map((project) => project.category))];

  return (
    <section id="portfolio" className="py-20 bg-primary">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Dự Án Tiêu Biểu ITWe Đã Thực Hiện
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            Khám phá một số dự án tiêu biểu chúng tôi đã thực hiện cho khách
            hàng trong các lĩnh vực SEO Google Maps, thiết kế website, và các
            giải pháp kỹ thuật số khác
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="px-4 py-2 rounded-full bg-accent text-white">
            Tất Cả
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-full bg-dark/30 hover:bg-accent/80 text-light transition-colors">
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-accent/10 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative overflow-hidden h-60">
                <img
                  src={project.image}
                  alt={`Dự án ${project.title} - ${project.category} - ITWe`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="px-4 py-2 bg-accent text-white rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span aria-label={`Xem chi tiết dự án ${project.title}`}>
                      Xem Chi Tiết
                    </span>
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-medium text-accent bg-accent/10 rounded-full px-3 py-1">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-light mb-2">
                  {project.title}
                </h3>
                <p className="text-light/70">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
