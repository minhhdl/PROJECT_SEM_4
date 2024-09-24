import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="text-center">
      {/* Contact Header */}
      <div className="bg-black text-white py-10">
        <h1 className="text-3xl font-bold"></h1>
      </div>

      {/* Contact Form */}
      <div className="py-10 px-5 bg-darkGray">
        <form className="max-w-lg mx-auto bg-darkGray">
          <input
            type="text"
            placeholder="Enter your first and last name"
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Enter email address"
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Enter subject"
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Enter your message"
            required
            className="w-full p-3 mb-4 border border-gray-300 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-white px-5 py-2 rounded hover:bg-opacity-75 mt-4 lg:mt-0 lg:ml-5"
          >
            Submit
          </button>
        </form>
      </div>

      {/* New Arrivals Section */}
      <div className="flex flex-col lg:flex-row items-center p-10 text-white bg-black">
        <div className="flex-1 p-5">
          <h1 className=" text-2xl text-gray-700">
            New books are always updated the fastest. You are welcome visit.
            Please contact us now!
          </h1>
        </div>
        <Link
          to={"/products"}
          className="bg-primary text-white px-5 py-2 rounded hover:bg-opacity-75 mt-4 lg:mt-0 lg:ml-5"
        >
          All Books
        </Link>
      </div>
    </div>
  );
};

export default Contact;
