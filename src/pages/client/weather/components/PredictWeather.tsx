import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { rightCard } from '../../../../services/raw_data';
import RightCard from './RightCard';
import { FreeMode } from 'swiper/modules';

const PredictWeather = () => {
  return (
    <>
      <Box>
        <Typography sx={{ fontSize: '30px', mt: '20px', color: '#003B72' }}>
          DỰ BÁO CHI TIẾT
        </Typography>

        <Swiper
        style={{paddingTop: '35px'}}
        freeMode={true}
        modules={[FreeMode]}
         breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween:70,
          
          },480: {
            slidesPerView: 2,
            spaceBetween:70,
          },
          768: {
            slidesPerView: 3,
            spaceBetween:70,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween:70,
          },
         }}
        >
          {rightCard.map((item, index) => (
            <SwiperSlide key={index}>
              <RightCard
                title={item.title}
                logo={item.logo}
                num={item.num}
                type={item.type}
                index={index}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
};

export default PredictWeather;
