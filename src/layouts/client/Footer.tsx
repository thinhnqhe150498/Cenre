import React from "react";
import { Stack, Box, Typography, Button, Divider } from "@mui/material";
import LOGOBRAND from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
const ClientFooter = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        width="97%"
        mb={2}
        mt={2}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap={10}
        >
          <Box display="flex" alignItems="center">
            <img src={LOGOBRAND} alt="" width="40px" height="40px" />
            <Typography
              textAlign="center"
              variant="h6"
              width="360px"
              sx={textInter}
            >
              CỔNG THÔNG TIN ĐIỆN TỬ SỨC KHỎE MÔI TRƯỜNG THUỘC VIỆN KHÍ TƯỢNG
              THỦY VĂN VÀ BIẾN ĐỔI KHÍ HẬU
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={textInter} mb={2}>
              Địa chỉ: Số 23 ngõ 62 - Đường Nguyễn Chí Thanh - Phường Láng
              Thượng - Đống Đa - Hà Nội
            </Typography>
            <Box display="flex" justifyContent="space-between" width="525px">
              <Typography textAlign="center" variant="h6" sx={textInter}>
                [Tel]:+84 XXXXXXXXXXX
              </Typography>
              <Typography textAlign="center" variant="h6" sx={textInter}>
                [Mail] skmt@cfmac.ac.com
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box display="flex" gap={10} flexDirection="column">
          <Box>
            <Typography mb={1} variant="h6" sx={textInter}>
              ĐIỀU KHOẢN SỬ DỤNG
            </Typography>
            <Typography variant="h6" sx={textInter}>
              CHÍNH SÁCH BẢO MẬT
            </Typography>
          </Box>
          <Link to="/login">
            <Button variant="contained" sx={buttonLogin}>
              <Typography
                color="#003B72"
                fontSize="12px"
                fontWeight="400"
                lineHeight="normal"
                sx={{ borderBottom: "1px solid #003B72", pb: "1px" }}
              >
                ĐĂNG NHẬP
              </Typography>
            </Button>
          </Link>
        </Box>
      </Stack>
      <Box sx={{ border: "2px solid #000" }} width="100%"></Box>
      <Box
        mt={2}
        width="97%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pb="18px"
      >
        <Typography variant="h6" sx={textInter}>
          Copyright © 2023 by CENRE
        </Typography>
        <Typography variant="h6" sx={textInter}>
          Bản quyền thuộc về Trung Tâm Nghiên Cứu Khí Tượng, Khí Hậu
        </Typography>
      </Box>
    </>
  );
};

const textInter = {
  color: "#003B72",
  fontSize: "12px",
  fontWeight: "400",
  lineHeight: "normal",
};

const buttonLogin = {
  bgcolor: "#B6E2F5",
  "&:hover": {
    bgcolor: "red",
  },
};

export default ClientFooter;
