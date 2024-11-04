import React from "react";

import "./Blogs.css";

const Blogs = () => {
  return (
    <>
      <section>
        <div className="blog-page">
          <div className="blog-header"></div>
          <div className="blog-content">
            <h2>Why read books with us</h2>
            <div className="underline"></div>
            <div className="features">
              <div className="feature">
                <i className="fas fa-shipping-fast"></i>
                <h3>Full</h3>
                <p>with different genres of books, famous authors</p>
              </div>
              <div className="feature">
                <i className="fas fa-shipping-fast"></i>
                <h3>Read books for free</h3>
                <p>no deposit required</p>
              </div>
              <div className="feature">
                <i className="fas fa-shipping-fast"></i>
                <h3>Friendly</h3>
                <p>with simple and easy to use interface</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
