import React from "react";
// import Navbar from "../Navbar/Navbar";

import BgImage from "../../assets/Header/hero-bg2.jpg";
import HeaderImage from "../../assets/Header/hero3.png";
import Learns from "../../assets/learners.png";

import { Link } from "react-router-dom";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export default function Header() {
  return (
    <>
      <section style={bgStyle} className="pt-3">
        {/* Navbar section  */}
        {/* <div className="fixed top-3 w-full z-[999999]">
          <Navbar />
        </div> */}

        <div className=" container min-h-[600px] grid grid-cols-1 md:grid-cols-2">
          {/* Text content section  */}
          <div className="flex flex-col felx-grap justify-center h-full gap-5">
            <h1 className="text-2xl md:text-5xl uppercase font-extrabold">
              E-books are a modern gateway to ancient wisdom
            </h1>
            <p className="text-sx ">
              Books are no longer just a physical experience, they have
              transcended into the digital world, expanding the reach of
              knowledge
            </p>
            <div>
              <Link
                to={"/products"}
                class="rounded border border-transparent bg-primary text-white px-16 py-3 hover:bg-primaryHover hover:shadow-lg transition duration-300 ease-in-out uppercase"
              >
                Explore Courses
              </Link>
            </div>
            {/* review section  */}
            <div className="flex gap-4 items-center">
              <img src={Learns} alt="" className="max-w-[120px]" />
              <div className="flex opacity-80">
                <p>1000+</p>
                <p className="text-sx ml-2">Happy Learners</p>
              </div>
            </div>
          </div>
          {/* Header image  */}
          <div className="flex justify-center items-end">
            <img src={HeaderImage} alt="Header Image" />
          </div>
        </div>
      </section>
    </>
  );
}
