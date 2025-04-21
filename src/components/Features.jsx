const Features = () => {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Tại Sao Chọn Chúng Tôi
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            Chúng tôi kết hợp chuyên môn, sự đổi mới và chiến lược hướng đến kết
            quả để mang đến các giải pháp kỹ thuật số vượt trội
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          <div className="animate-fade-in animation-delay-100">
            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-light mb-2">
                  Phương Pháp Dựa Trên Dữ Liệu
                </h3>
                <p className="text-light/70">
                  Chúng tôi phân tích các chỉ số và hành vi người dùng để tối ưu
                  hóa sự hiện diện trực tuyến và tối đa hóa ROI trên mọi khoản
                  đầu tư kỹ thuật số.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in animation-delay-200">
            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-light mb-2">
                  Nhanh Chóng & Phản Hồi Tốt
                </h3>
                <p className="text-light/70">
                  Chúng tôi xây dựng các trang web và ứng dụng tốc độ cao cung
                  cấp trải nghiệm người dùng tuyệt vời trên mọi thiết bị.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in animation-delay-300">
            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-light mb-2">
                  Bảo Mật Là Ưu Tiên Hàng Đầu
                </h3>
                <p className="text-light/70">
                  Chúng tôi triển khai các biện pháp bảo mật mạnh mẽ để bảo vệ
                  dữ liệu của bạn và đảm bảo tuân thủ các tiêu chuẩn ngành.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in animation-delay-400">
            <div className="flex gap-5 items-start">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-light mb-2">
                  Hỗ Trợ Tận Tâm
                </h3>
                <p className="text-light/70">
                  Đội ngũ của chúng tôi cung cấp hỗ trợ và bảo trì liên tục để
                  đảm bảo tài sản kỹ thuật số của bạn hoạt động tốt nhất.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 animate-fade-in animation-delay-500 mt-8">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-accent to-accent/10 blur-xl opacity-40"></div>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Đội ngũ làm việc về giải pháp kỹ thuật số"
                className="relative rounded-xl shadow-2xl shadow-dark/80 object-cover w-full h-auto mx-auto max-w-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
