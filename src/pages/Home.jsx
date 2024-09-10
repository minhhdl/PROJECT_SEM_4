import React from "react";
import Header from "../components/Header/Header";
import Brand from "../components/Brand/Brand";
import FeaturesBooks from "../components/FeaturesBooks/FeaturesBooks";
import ProductPage from "../components/ProductPage/ProductPage";

export default function Home() {
  return (
    <main className="overflow-x-hidden text-white bg-darkGray">
      <Header />
      <Brand />
      <FeaturesBooks />
      <ProductPage />
    </main>
  );
}
