import React from "react";
import "./Contacts.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header"></div>
      <div className="contact-form-container">
        <form className="contact-form">
          <input type="text" placeholder="Nhập họ và tên của bạn" required />
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
          <img src="../images/img_1.png" alt="New Arrivals" />
        </div>
        <button>Shop Now</button>
      </div>
    </div>
  );
};

export default Contact;

// const Contact = () => {
//   return (
//     <div className="text-center">
//       <div className="bg-red-500 text-white py-5">
//         <h1 className="text-3xl font-bold m-0">Liên hệ với chúng tôi</h1>
//       </div>
//       <div className="py-10 px-5 bg-white">
//         <form className="max-w-lg mx-auto bg-white">
//           <input
//             type="text"
//             placeholder="Nhập họ và tên của bạn"
//             required
//             className="w-full p-3 mb-4 border border-gray-300 rounded"
//           />
//           <input
//             type="email"
//             placeholder="Nhập địa chỉ email"
//             required
//             className="w-full p-3 mb-4 border border-gray-300 rounded"
//           />
//           <input
//             type="text"
//             placeholder="Nhập chủ đề"
//             required
//             className="w-full p-3 mb-4 border border-gray-300 rounded"
//           />
//           <textarea
//             placeholder="Nhập tin nhắn của bạn"
//             required
//             className="w-full p-3 mb-4 border border-gray-300 rounded"
//           ></textarea>
//           <button
//             type="submit"
//             className="bg-black text-white px-5 py-2 rounded hover:bg-gray-700"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//       <div className="flex items-center p-10 bg-gray-100">
//         <div className="flex-1 p-5">
//           <h2 className="text-3xl font-bold text-blue-900">#NewArrivals</h2>
//           <p className="text-base text-gray-700">
//             Những cuốn sách mới luôn được cập nhật nhanh nhất. Hoan nghênh bạn
//             ghé thăm. Hãy liên hệ với chúng tôi ngay bây giờ!
//           </p>
//         </div>
//         <div className="flex-1 text-center">
//           <img
//             src="../images/img_1.png"
//             alt="New Arrivals"
//             className="max-w-full rounded-lg"
//           />
//         </div>
//         <button className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 ml-5">
//           Shop Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Contact;
