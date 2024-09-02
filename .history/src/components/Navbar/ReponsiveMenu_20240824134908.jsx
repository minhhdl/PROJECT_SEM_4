import React from "react";
import { NavLink } from "react-router-dom";
import { navLinksMobile } from "../../data/data";

export default function ReponsiveMenu({ showMobileMenu, setShowMobileMenu }) {
  return (
    <>
      <section className="relative">
        <div className="container">
          <div
            className={`${
              showMobileMenu ? "top-3" : "top-[-300px] opacity-0"
            } absolute left-0 w-full h-[200px] transition-all duration-200 ease-in-out`}
          >
            <div className="container bg-black/70 backdrop-blur-3xl rounded-3xl p-4 px-6">
              {/* NavLink here  */}
              <ul className="space-y-3">
                {navLinksMobile.map(({ path, name, icon: Icons }, index) => {
                  return (
                    <li key={index} className="">
                      <NavLink
                        className="flex items-center gap-4 w-fit uppercase font-bold text-sm hover:border-b border-primary transition duration-300 ease-in-out cursor-pointer "
                        to={path}
                      >
                        <span>
                          <Icons />
                        </span>
                        {name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
