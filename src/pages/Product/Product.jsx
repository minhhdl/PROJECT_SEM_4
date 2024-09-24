import React from "react";
import ProductPage from "../../components/ProductPage/ProductPage";

export default function Product() {
  return (
    <div className="bg-darkGray">
      <div className="py-10 bg-black text-center text-white px-4"></div>
      {/* <ProductPage /> */}
      <div className="max-w-7xl mx-auto">
        <ProductPage />
      </div>
    </div>
  );
}
