import React from "react";
import "./Contacts.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header"></div>
      <div className="contact-form-container">
        <form className="contact-form">
          <input type="text" placeholder="Your full name" autoFocus required />
          <input type="email" placeholder="Your email" required />
          <input type="text" placeholder="Title" required />
          <textarea placeholder="Content" required></textarea>
          <button type="Gửi">Submit</button>
        </form>
      </div>
      <div className="new-arrivals">
        <div className="new-arrivals-content">
          <h2>#NewArrivals</h2>
          <p>
            New books are always updated quickly. Welcome to visit. Contact us
            now!
          </p>
          <br />
          <button>
            <a href="/products">All book</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
