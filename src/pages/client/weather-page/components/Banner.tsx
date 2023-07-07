import React from "react";
import BANNER_BG from "../../../../assets/images/bg-banner-weather.png";
import MARK from "../../../../assets/images/mark.png";
import SUN_FILL from "../../../../assets/images/weather-page/sun_color.png";
import RAIN_FILL from "../../../../assets/images/weather-page/rain_color.png";
import { Box, Typography } from "@mui/material";
const Banner = () => {
  return (
    <Box
      width="100%"
      height="77vh"
      sx={{
        backgroundImage: `url(${BANNER_BG})`,
        backgroundPosition: "center",
        backgroundRepeat: 'no-repeat',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "10px",
        mt: 3,
      }}
    >
      <Box display="flex" p="40px 80px" alignItems="center" gap="14px">
        <img src={MARK} alt="" width="17px" height="25px" />
        <Typography fontSize="25px" color="#fff" fontWeight="700">
          Thành phố Hồ Chí Minh
        </Typography>
      </Box>
      <Box display="flex" gap='30px' p="40px 80px" position="relative">
        <Box>
          <img
            src={SUN_FILL}
            alt=""
            width="70px"
            height="70px"
            style={{ position: "absolute", top: 0 }}
          />
          <Typography
            fontSize="70px"
            color="#fff"
            fontWeight="700"
            marginLeft="65px"
          >
            35<sup style={{ fontSize: "40px" }}>&deg;</sup>
            <sup style={{ fontSize: "50px" }}>c</sup>
          </Typography>
        </Box>
        <Box>
          <img
            src={RAIN_FILL}
            alt=""
            width="70px"
            height="70px"
            style={{ position: "absolute", top: 0 }}
          />
          <Typography
            fontSize="70px"
            color="#fff"
            fontWeight="700"
            marginLeft="55px"
          >
            60<p style={{ fontSize: "40px", display:'inline-block', margin: 0 }}>%</p>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
