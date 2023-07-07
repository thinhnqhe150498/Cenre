import { Chip, Stack, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { hourTemp } from "../../../../services/raw_data";
import useBackGround from "../../../../hooks/useBackGround";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
const HourTemp = () => {
  
  const theme = useTheme();
  const isLight = useBackGround();
  return (
    <>
      <Box display="flex" gap="100px" alignItems="center">
        <Typography
          sx={{ fontSize: "200px", color: theme.palette.primary.main }}
        >
          35<sup style={{ fontSize: "110px" }}>&deg;</sup>
          <sup style={{ fontSize: "150px" }}>c</sup>
        </Typography>
        <Box display="flex" flexDirection="column" gap="15px">
          <Typography
            sx={{
              fontSize: "35px",
              color: theme.palette.primary.main,
              fontWeight: "700",
              lineHeight: "normal",
            }}
          >
            Trời ít mây
          </Typography>
          <Typography
            sx={{
              fontSize: "35px",
              color: theme.palette.primary.main,
              fontWeight: "700",
              lineHeight: "normal",
            }}
          >
            Nhiệt độ cao nhất: 35
          </Typography>
          <Typography
            sx={{
              fontSize: "35px",
              color: theme.palette.primary.main,
              fontWeight: "700",
              lineHeight: "normal",
            }}
          >
            Nhiệt độ thấp nhất: 27
          </Typography>
        </Box>
      </Box>
      <Typography
        sx={{
          fontSize: "35px",
          color: theme.palette.primary.main,
          mt: "60px",
        }}
      >
        NHIỆT ĐỘ HÀNG GIỜ
      </Typography>
      <Box
        width="100%"
        bgcolor={isLight ? "#fff" : "rgba(255, 255, 255, 0.20)"}
        borderRadius="10px"
        mt={3}
      >
          <Swiper
            spaceBetween={50}
            slidesPerView={7}
            navigation
            modules={[Navigation]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
        <Box px="51px" justifyContent="space-between" display="flex" gap="60px">
            {hourTemp.map((item) => (
              <SwiperSlide>
                <Stack direction="column" alignItems='center'>
                  <Chip
                    label={item.time}
                    sx={{
                      mt: "40px",
                      bgcolor: "#005CB0",
                      color: "#fff",
                      fontFamily: "Lato",
                      px: '24px'
                    }}
                  />
                  <img
                    src={item.img}
                    alt=""
                    width="120px"
                    height="100px"
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      objectFit: "contain",
                    }}
                  />
                  <Box
                    sx={{ mb: "40px" }}
                    display="flex"
                    justifyContent="center"
                    gap="20px"
                  >
                    <Typography sx={{ color: theme.palette.primary.main }}>
                      {item.degree}
                    </Typography>
                    <Typography
                      sx={{ color: theme.palette.primary.main }}
                      fontWeight="300"
                    >
                      {item.degree}
                    </Typography>
                  </Box>
                </Stack>
              </SwiperSlide>
            ))}
        </Box>
          </Swiper>
      </Box>
    </>
  );
};

const typoDesc = {
  fontSize: "35px",
  color: "#003B72",
  fontWeight: "700",
  lineHeight: "normal",
};

export default HourTemp;
