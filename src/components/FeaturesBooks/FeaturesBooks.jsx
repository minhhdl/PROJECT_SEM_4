import React from "react";
import { Link } from "react-router-dom";

// Import Features Data
import { booksData } from "../../data/data";

import TitleTypeOne from "../../UI/TitleTypeOne/TitleTypeOne";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import react icon
import { BsArrowReturnRight } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

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
          modules={[Pagination, Navigation]}
          navigation={{
            prevEl: ".button-prev-slide",
            nextEl: ".button-next-slide",
          }}
          breakpoints={breakpoints}
        >
          {booksData.map(
            (
              { id, title, image, category, author, published_date, content },
              index
            ) => {
              return (
                <SwiperSlide key={index}>
                  <div className="mt-14 flex flex-col gap-6 text-center">
                    <Link
                      to={`/products/${id}`}
                      key={id}
                      className="featurebook bg-light mx-[50px]"
                    >
                      <img src={image} alt="" />
                    </Link>
                    <div className="featurebook-info">
                      <Link
                        key={id}
                        to={`/products/${id}`}
                        className="hover:text-primary"
                      >
                        <h4>{title}</h4>
                      </Link>
                      <div className="mt-2 mb-5">
                        <small>{author}</small>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
          )}
          <div className="slider-button">
            <div className="button-prev-slide slidebutton flex items-center justify-center w-10 h-10 bg-primary bg-opacity-80 text-white rounded-full cursor-pointer absolute top-1/2 -translate-y-1/2 left-0 z-10 hover:bg-primaryHover hover:bg-opacity-100 active:bg-opacity-60 transition-all duration-300 ease-in-out">
              <GoArrowLeft />
            </div>
            <div className="button-next-slide slidebutton flex items-center justify-center w-10 h-10 bg-primary bg-opacity-80 text-white rounded-full cursor-pointer absolute top-1/2 -translate-y-1/2 right-0 z-10 hover:bg-primaryHover hover:bg-opacity-100 active:bg-opacity-60 transition-all duration-300 ease-in-out">
              <GoArrowRight />
            </div>
          </div>
        </Swiper>
        <div className="featurebook-border mt-14 h-px bg-dark-ex w-full"></div>
      </div>
    </section>
  );
}
