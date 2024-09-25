import React from "react";
import "./Contacts.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header"></div>
      <div className="contact-form-container">
        <form className="contact-form">
          <input
            type="text"
            placeholder="Nhập họ và tên của bạn"
            autoFocus
            required
          />
          <input type="email" placeholder="Nhập địa chỉ email" required />
          <input type="text" placeholder="Nhập chủ đề" required />
          <textarea placeholder="Nhập tin nhắn của bạn" required></textarea>
          <button type="Gửi">Submit</button>
        </form>
      </div>
      <div className="new-arrivals">
        <div className="new-arrivals-content">
          <h2>#NewArrivals</h2>
          <p>
            Những cuốn sách mới luôn được cập nhật nhanh nhất. Hoan nghênh bạn
            ghé thăm. Hãy liên hệ với chúng tôi ngay bây giờ!
          </p>
        </div>
        <div className="new-arrivals-image">
          <img src="../src/images/img_1.png" alt="New Arrivals" />
        </div>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default Contact;
