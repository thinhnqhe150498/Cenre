import { Box, Stack, Typography, useTheme } from "@mui/material";
import NEWS from "../../../../assets/images/predict-weather-page/title.png";
import React from "react";

const New = () => {
  const theme = useTheme()
  return (
    <Box display='flex' gap='10px' mb={4}>
      <img
        src={NEWS}
        width="200px"
        height="140px"
        style={{ margin: "20px 0px 0px 40px" }}
      />
      <Stack m='20px 0px'>
        <Typography sx={{fontWeight: 'bold', color: theme.palette.secondary.main, fontSize: '25px', mb: '5px'}}>Nhận định thời tiết Tết năm 2023</Typography>
        <Typography sx={{color: '#000', fontWeight: '400', width: '70%'}}>
          Mọi ý kiến đóng góp xin gửi về Phòng Nghiên cứu Dự báo Khí hậu, Trung
          tâm Nghiên cứu Khí tượng – Khí hậu, Viện Khoa học Khí tượng Thuỷ văn
          và Biến đổi khí hậu...
        </Typography>
      </Stack>
    </Box>
  );
};

export default New;
