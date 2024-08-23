import React from "react";
import Header from "../components/Header/Header";
import Brand from "../components/Brand/Brand";
import FeaturesBooks from "../components/FeaturesBooks/FeaturesBooks";

export default function Home() {
  return (
    <main className="overflow-x-hidden text-white bg-darkGray">
      <Header />
      <Brand />
      <FeaturesBooks />
    </main>
  );
}
