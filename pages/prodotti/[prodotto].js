import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Prodotto = (props) => {
  return (
    <div className="prodotto-container">
      <div className="titolo-swiper">
        <h2>Castagne fresche calibrate</h2>
        <section className="swiper-container">
          <Swiper
            modules={[Navigation]}
            className="swiper"
            navigation
            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide className="swiper-slide">Slide 1</SwiperSlide>
            <SwiperSlide className="swiper-slide">Slide 2</SwiperSlide>
            <SwiperSlide className="swiper-slide">Slide 3</SwiperSlide>
            <SwiperSlide className="swiper-slide">Slide 4</SwiperSlide>
          </Swiper>
        </section>
      </div>
      <div className="prodotto-descrizione">
        Laboris pariatur laborum excepteur ad eu aliquip veniam do incididunt.
        Est occaecat esse quis proident voluptate commodo quis. Ex velit minim
        cillum proident reprehenderit sunt enim. Tempor ad ut sit duis aliquip
        sunt ea est in. Ut officia dolore mollit ullamco qui laborum anim velit
        ex consequat qui exercitation. Sunt ipsum consectetur exercitation amet
        minim aliqua quis ex. Et et magna ea qui cillum Lorem nulla. Occaecat
        amet aliqua nostrud amet consequat pariatur labore tempor deserunt quis.
        Sit ipsum exercitation dolore culpa veniam duis cupidatat elit ad.
        Eiusmod pariatur in voluptate sunt incididunt sit eu cillum. Minim est
        exercitation occaecat aliqua sit.
      </div>
    </div>
  );
};

export default Prodotto;
