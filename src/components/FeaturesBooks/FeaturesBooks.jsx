import React from "react";
import { Link } from "react-router-dom";

// Import Features Data
import { featuredBooksData } from "../../data/data";

import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import react icon
import { BsArrowReturnRight } from "react-icons/bs";

//Swiper breakpoint
const breakpoints = {
  // when window width is <= 1024px
  1024: {
    slidesPerView: 4,
    spaceBetweenSlides: 30,
  },
  // when window width is <= 768px
  768: {
    slidesPerView: 3,
    spaceBetweenSlides: 20,
  },
  // when window width is <= 480px
  480: {
    slidesPerView: 2,
    spaceBetweenSlides: 10,
  },
  // when window width is <= 0px
  0: {
    slidesPerView: 1,
    spaceBetweenSlides: 0,
  },
};
export default function FeaturesBooks() {
  return (
    <section className="Featured">
      <div className="container mx-auto relative">
        <TitleTypeOne Title={"Featured books"} />
        {/* view all product button  */}
        <Link
          to={"/products"}
          className=" ml-12 flex text-lg font-medium text-white items-center hover:text-primary transition-all duration-300 ease-in-out gap-2"
        >
          View all
          <BsArrowReturnRight />
        </Link>
        <Swiper
          className=".swiper-wrapper"
          spaceBetween={50}
          slidesPerView={5}
          loop={true}
          modules={[Pagination]}
          // pagination={{ el: ".swiper-pagination", clickable: true }}
          breakpoints={breakpoints}
        >
          {featuredBooksData.map(
            ({ img, imgLlink, nameLink, name, writer, desc }, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="mt-14 flex flex-col gap-6 text-center">
                    <Link
                      className="featurebook bg-light mx-[50px]"
                      to={imgLlink}
                    >
                      <img src={img} alt="" />
                    </Link>
                    <div className="featurebook-info">
                      <Link to={nameLink}>
                        <h4>{name}</h4>
                      </Link>
                      <div className="mt-2 mb-5">
                        <small>{writer}</small>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
        <div className="featurebook-border mt-14 h-px bg-dark-ex w-full"></div>
      </div>
    </section>
  );
}
