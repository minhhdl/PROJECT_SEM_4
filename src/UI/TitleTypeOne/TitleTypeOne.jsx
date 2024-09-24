import React from "react";
import victor from "../../assets/victor.png";

export default function TitleTypeOne({ ClassName, Title, TitleTop }) {
  return (
    <div
      className={`flex flex-col gap-5 text-center items-center ${ClassName}`}
    >
      <small>{TitleTop}</small>
      <div className="heading-H grid items-center gap-25 md:gap-10 sm:gap-5 grid-cols-[1fr_auto_1fr]">
        <div className="line bg-dark-ex h-px uppercase"></div>
        <h2 className="uppercase text-white text-3xl font-medium">{Title}</h2>
        <div className="line bg-dark-ex h-px"></div>
      </div>
      <img src={victor} alt="" className="w-[46px] mx-auto" />
    </div>
  );
}
