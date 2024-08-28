import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/LOGO2.png";

// Import icon react
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-darkGray text-white border-t border-primary py-12 px-8">
      <div className="flex flex-wrap items-center justify-between text-start mb-8">
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <Link to={"/"} className="block">
            <img className="max-w-[120px]" src={Logo} alt="Logo" />
          </Link>
          <p className="font-bold mt-4">
            A place to share e-books just for you
          </p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="*" className="text-xl text-gray-400 hover:text-primary">
            <BsFacebook />
          </a>
          <a href="*" className="text-xl text-gray-400 hover:text-primary">
            <AiFillInstagram />
          </a>
          <a href="*" className="text-xl text-gray-400 hover:text-primary">
            <FaSquareXTwitter />
          </a>
        </div>
      </div>
      <div className="pt-8 text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start">
          <h4 className="font-semibold text-lg py-4">About Us</h4>
          <a href="*" className="text-gray-400 hover:text-primary pb-2">
            Introduce
          </a>
          <a href="*" className="text-gray-400 hover:text-primary pb-2">
            Clause
          </a>
          <a href="*" className="text-gray-400 hover:text-primary pb-2">
            Privacy Policy
          </a>
        </div>
        <div className="flex flex-col items-start">
          <h4 className="font-semibold text-lg py-4">More Information</h4>
          <a href="*" className="text-gray-400 hover:text-primary pb-2">
            Investment Opportunity
          </a>
          <a href="*" className="text-gray-400 hover:text-primary pb-2">
            Recruitment
          </a>
          <a href="/contact" className="text-gray-400 hover:text-primary pb-2">
            Contact
          </a>
          <a href="*" className="text-gray-400 hover:text-primary pb-2">
            Book Publishing Service
          </a>
        </div>
        <div className="flex flex-col items-start">
          <h4 className="font-semibold text-lg py-4">Useful Information</h4>
          <a href="*" className="text-gray-400 hover:text-primary pb-2">
            Service Usage Agreement
          </a>
          <a href="*" className="text-gray-400 hover:text-primary pb-2">
            Interest
          </a>
          <a href="*" className="text-gray-400 hover:text-primary pb-2">
            Privacy Regulations
          </a>
        </div>
        <div className="flex flex-col items-start">
          <h4 className="font-semibold text-lg py-4">News</h4>
          <a href="*" className="text-gray-400 hover:text-primary pb-2">
            Service News
          </a>
          <a href="*" className="text-gray-400 hover:text-primary pb-2">
            Book Review
          </a>
          <a href="*" className="text-gray-400 hover:text-primary pb-2">
            Release Schedule
          </a>
        </div>
      </div>
    </div>
  );
}
