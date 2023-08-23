import React from "react";
import { Box, Typography, Stack, Chip } from "@mui/material";
import HOUR_ICON from "../../../../assets/images/home-page/hour_icon.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { hourTemp1 } from "../../../../services/raw_data";
import { FreeMode } from 'swiper/modules';
const HourTemp = () => {
  return (
    <Box mt='30px' display="flex" gap={3}>
      <img src={HOUR_ICON}  width="150px"
                    height="150px"  alt="" />
      <Box width="calc(100% - 175px)" bgcolor="rgba(255, 255, 255, 0.7)" borderRadius="20px">
        <Swiper
        freeMode={true}
        modules={[FreeMode]}
          breakpoints={{
            0:{
              slidesPerView:1,
              spaceBetween:50
            },
            480: {
              slidesPerView: 3,
              spaceBetween:50,
            },
            768: {
              slidesPerView: 5,
              spaceBetween:50,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween:50,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <Box
            justifyContent="space-between"
            display="flex"   
            width="150p" 
            height="150px"
          >
            {hourTemp1.map((item) => (
              <SwiperSlide>
                <Stack direction="column" alignItems="center">
                  <Chip
                    label={item.time}
                    sx={{
                      mt: "15px",
                      bgcolor: "#005CB0",
                      color: "#fff",
                      fontFamily: "Lato",
                      px: "4px",
                    }}
                  />
                  <img
                    src={item.img}
                    alt=""
                    width="40px"
                    height="40px"
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      objectFit: "contain",
                    }}
                  />
                  <Box
                    sx={{ mb: "0px" }}
                    display="flex"
                    justifyContent="center"
                    gap="20px"
                  >
                    <Typography sx={{ color: "#000" }}>
                      {item.degree}
                    </Typography>
                    <Typography sx={{ color: "#000" }} fontWeight="300">
                      {item.degree}
                    </Typography>
                  </Box>
                </Stack>
              </SwiperSlide>
            ))}
          </Box>
        </Swiper>
      </Box>
    </Box>
  );
};

export default HourTemp;
