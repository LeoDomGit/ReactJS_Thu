/* eslint-disable */
import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function Slider() {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src="../img/panner1.png" className="d-block w-100" style={{ height: "600px" }} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../img/panner2.png" className="d-block w-100" style={{ height: "600px" }} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../img/panner3.png" className="d-block w-100" style={{ height: "600px" }} alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../img/panner4.png" className="d-block w-100" style={{ height: "600px" }} alt="..." />
        </SwiperSlide>
      </Swiper>
      {/* <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../img/pn1.png" className="d-block w-100" style={{ height: "680px" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="../img/pn2.png" className="d-block w-100" style={{ height: "680px" }} alt="..." />
          </div>
          <div className="carousel-item">
            <img src="../img/pn3.png" className="d-block w-100" style={{ height: "680px" }} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
    </>
  );
}

export default Slider;
