import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex items-center justify-center min-h-[calc(115vh-100px)] bg-gray text-white border-b border-gray-700">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-6xl font-bold">404</h1>
        <h3 className="text-2xl font-medium text-red-500">
          Lỗi, không tìm thấy trang này !
        </h3>
        <Link
          to={"/"}
          className="btn border uppercase font-medium border-primary px-4 py-2 rounded-full hover:bg-primaryHover transition-all duration-300 ease-in-out z-10"
        >
          Back To Home
        </Link>
      </div>
    </section>
  );
}
