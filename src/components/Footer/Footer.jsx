import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/LOGO2.png";

// Import icon react
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-darkGray text-white border-t border-primary py-16 px-24 md:px-8">
      <div className="flex items-center justify-between flex-wrap text-start mb-8">
        <div>
          <Link to={"/"} className="block">
            <img className="max-w-[120px]" src={Logo} alt="Logo" />
          </Link>
          <p className="font-bold">A place to share e-books just for you</p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="*" className="text-xl text-gray-900 hover:text-primary">
            <BsFacebook />
          </a>
          <a href="*" className="text-xl text-gray-900 hover:text-primary">
            <AiFillInstagram />
          </a>
          <a href="*" className="text-xl text-gray-900 hover:text-primary">
            <FaSquareXTwitter />
          </a>
        </div>
      </div>
      <div className="pt-8 text-center flex justify-between flex-wrap">
        <div className="flex flex-col">
          <h4 className="font-semibold text-lg py-4">About us</h4>
          <a href="*" className="text-gray-900 hover:text-primary pb-2">
            Introduce
          </a>
          <a href="*" className="text-gray-900 hover:text-primary pb-2">
            Clause
          </a>
          <a href="*" className="text-gray-900 hover:text-primary pb-2">
            Privacy policy
          </a>
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold text-lg py-4">More information</h4>
          <a href="*" className="text-gray-900 hover:text-primary pb-2">
            Investment opportunity
          </a>
          <a href="*" className="text-gray-900 hover:text-primary pb-2">
            Recruitment
          </a>
          <a href="/contact" className="text-gray-900 hover:text-primary pb-2">
            Contact
          </a>
          <a href="*" className="text-gray-900 hover:text-primary pb-2">
            Book publishing service
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="font-semibold text-lg py-4">Useful information</h4>
          <a href="*" className="text-gray-900 hover:text-primary pb-2">
            Service usage agreement
          </a>
          <a href="*" className="text-gray-900 hover:text-primary pb-2">
            Interest
          </a>
          <a href="*" className="text-gray-900 hover:text-primary pb-2">
            Privacy regulations
          </a>
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold text-lg py-4">Tin tức</h4>
          <a href="*" className="text-gray-900 hover:text-primary pb-2">
            Service news
          </a>
          <a href="*" className="text-gray-900 hover:text-primary pb-2">
            Book review
          </a>
          <a href="*" className="text-gray-900 hover:text-primary pb-2">
            Release schedule
          </a>
        </div>
      </div>
    </div>
  );
}
