import React from "react";
import { Box, Stack } from "@mui/material";
import RightCard from "./RightCard";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
const RightSide = () => {
  return (
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <RightCard />
        </SwiperSlide>
        <SwiperSlide>
          <RightCard />
        </SwiperSlide>
        <SwiperSlide>
          <RightCard />
        </SwiperSlide>
        <SwiperSlide>
          <RightCard />
        </SwiperSlide>
        <SwiperSlide>
          <RightCard />
        </SwiperSlide>
      </Swiper>
  );
};

export default RightSide;
