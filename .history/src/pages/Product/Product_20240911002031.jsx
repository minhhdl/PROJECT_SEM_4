import React from "react";
import ProductPage from "../../components/ProductPage/ProductPage";

export default function Product() {
  return (
    <div className="bg-darkGray">
      <div className="py-20 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          All Book
        </h2>
      </div>

      {/* <ProductPage /> */}
      <div className="max-w-7xl mx-auto">
        <ProductPage />
      </div>
    </div>
  );
}
