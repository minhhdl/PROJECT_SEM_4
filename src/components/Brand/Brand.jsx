import React from "react";
import Brand2 from "../../assets/Brand/brand2.svg";
import Brand6 from "../../assets/Brand/brand6.svg";

export default function Brand() {
  return (
    <>
      <section className="bg-gray">
        <div className="container flex justify-around py-4 gap-2">
          <img src={Brand2} alt="" className="max-w-[100px]" />
          <img src={Brand6} alt="" className="max-w-[100px]" />
        </div>
      </section>
    </>
  );
}
