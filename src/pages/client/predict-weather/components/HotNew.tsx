import { Box, Typography } from "@mui/material";
import React from "react";

const HotNew = () => {
  return (
    <>
      <Box mt='27px' px={2}>
        <Typography fontSize="15px">
          Nhận định thời tiết Tết năm 2023
        </Typography>
        <Typography
          fontWeight="400"
          fontSize="12px"
          mt={1}
          sx={{ borderBottom: "1px solid #9D9C9C", pb: "10px" }}
        >
          Mọi ý kiến đóng góp xin gửi về Phòng Nghiên cứu Dự báo Khí hậu, Trung
          tâm Nghiên cứu Khí tượng – Khí hậu, Viện Khoa học Khí tượng Thuỷ văn
          và Biến đổi khí hậu...
        </Typography>
      </Box>
      
    </>
  );
};

export default HotNew;
