const CustomerStories = () => {
  const stories = [
    {
      name: "Nguyễn Văn Linh",
      position: "",
      company: "Nhà hàng Hải Sản Biển Xanh",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      story:
        "Sau khi sử dụng dịch vụ SEO Google Maps của ITWe, nhà hàng của chúng tôi bắt đầu thu hút khách du lịch từ các tỉnh lân cận. Lượng khách tăng gần 40% chỉ trong vòng 2 tháng và nhiều người nói rằng họ tìm thấy chúng tôi khi tìm kiếm nhà hàng hải sản trên Google Maps.",
    },
    {
      name: "Trần Thị Minh",
      position: "",
      company: "Spa Làn Da Xinh",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      story:
        "Trước đây, spa của chúng tôi chỉ thu hút khách hàng địa phương. Nhờ ITWe tối ưu Google Maps, chúng tôi bắt đầu nhận được khách hàng từ các tỉnh lân cận khi họ tìm kiếm dịch vụ spa cao cấp. Doanh thu tăng 60% và có những khách hàng di chuyển hơn 50km để sử dụng dịch vụ của chúng tôi.",
    },
    {
      name: "Lê Hoàng Nam",
      position: "",
      company: "Khách sạn Phương Đông",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      story:
        "Công suất phòng của khách sạn chúng tôi tăng đáng kể sau khi sử dụng dịch vụ SEO Google Maps của ITWe. Nhiều du khách chia sẻ rằng họ tìm thấy khách sạn của chúng tôi khi tìm kiếm chỗ nghỉ trên Google Maps. Đặc biệt, chúng tôi bắt đầu thu hút nhiều khách du lịch quốc tế hơn.",
    },
    {
      name: "Phạm Thu Hà",
      position: "",
      company: "Cửa hàng đồ handmade Việt",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      story:
        "Tôi không ngờ rằng việc tối ưu Google Maps lại mang đến hiệu quả tuyệt vời như vậy. Cửa hàng của chúng tôi đã thu hút được khách hàng từ nhiều tỉnh khác nhau, những người đang tìm kiếm sản phẩm handmade độc đáo. Doanh thu tăng gấp đôi sau 3 tháng làm việc với ITWe.",
    },
  ];

  return (
    <section id="stories" className="py-20 bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Câu Chuyện Của Khách Hàng
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            Khám phá những câu chuyện từ khách hàng khi sử dụng dịch vụ SEO
            Google Maps của chúng tôi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-dark/30 backdrop-blur-sm rounded-lg p-6 border border-accent/10 shadow-lg hover:shadow-accent/5 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}>
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 mt-1">
                  <img
                    src={story.image}
                    alt={`Ảnh của ${story.name}`}
                    className="w-16 h-16 rounded-full border-2 border-accent/30 object-cover"
                  />
                </div>
                <div>
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold text-light">
                      {story.name}
                    </h3>
                    <p className="text-accent">{story.company}</p>
                  </div>
                  <p className="text-light/70">"{story.story}"</p>
                  <div className="mt-4 flex">
                    <div className="flex text-accent">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;
