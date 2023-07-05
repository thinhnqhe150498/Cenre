import React from "react";
import { Box, Typography } from "@mui/material";
import HERO from '../../../../assets/images/bg.png'
const Hero = () => {
  return (
    <Box
      width="100%"
      height="600px"
      sx={{
        backgroundImage: `url(${HERO})`,
        position: "relative",
      }}
    >
      <Box
        position="absolute"
        sx={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          textAlign: "center",
        }}
      >
        <Typography variant="h1" sx={{ fontSize: 40, mb: 2 }}>
          SỨC KHOẺ MÔI TRƯỜNG
        </Typography>
        <Typography component="p" sx={{fontSize: 20}}>
          Bao gồm các dữ liệu, thông tin nghiên cứu nhằm ngăn ngừa hoặc kiểm
          soát các bệnh tật, thương tích, khả năng bị nhiễm độc và khuyết tật
          liên quan đến các tương tác giữa con người và môi trường sống của họ
        </Typography>
      </Box>
      
    </Box>
  );
};

export default Hero;
