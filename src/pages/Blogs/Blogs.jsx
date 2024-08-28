import React from "react";

import "./Blogs.css";

const Blogs = () => {
  return (
    <>
      <section>
        <div className="blog-page">
          <div className="blog-header"></div>
          <div className="blog-content">
            <h2>Tại sao nên đọc sách cùng chúng tôi</h2>
            <div className="underline"></div>
            <div className="features">
              <div className="feature">
                <i className="fas fa-shipping-fast"></i>
                <h3>Đầy đủ</h3>
                <p>với các thể loại sách khác nhau, các tác giả nổi tiếng</p>
              </div>
              <div className="feature">
                <i className="fas fa-shipping-fast"></i>
                <h3>Đọc sách miễn phí</h3>
                <p>không cần nạp tiền</p>
              </div>
              <div className="feature">
                <i className="fas fa-shipping-fast"></i>
                <h3>Thân thiện</h3>
                <p>với giao diện đơn giản dễ dùng</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
