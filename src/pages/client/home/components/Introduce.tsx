import React from "react";
import { Box, Stack, Typography, Container, Button } from "@mui/material";
import PERSON from '../../../../assets/images/person.png'
const Introduce = () => {
  return (
    <>
      <Box display="flex">
        <Box sx={{ flex: 1 }} bgcolor="#fff" mt='-30px'>
          <Container maxWidth="lg">
            <Stack direction="column">
              <Box display="flex" justifyContent="center" mt="70px">
                <Typography
                  sx={{ fontSize: 20, fontWeight: 800, lineHeight: "normal" }}
                  variant="h1"
                >
                  CHÀO MỪNG TỚI
                </Typography>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: 20,
                    fontWeight: 800,
                    lineHeight: "normal",
                    color: "#003B72",
                  }}
                >
                  &nbsp; SỨC KHOẺ MÔI TRƯỜNG CENRE
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex",flexDirection: 'column' ,alignItems: "center", mt: "70px" }}
              >
                <Typography sx={{ fontSize: 15, fontWeight: 700, lineHeight: "normal" }} width="463px">
                  Webiste cung cấp những dữ liệu và chỉ số về Sức khoẻ môi
                  trường, giúp người dùng theo dõi dễ dàng để nâng cao tầm quan
                  trọng của bảo vệ sức khoẻ bản thân, sau đó là bảo vệ môi
                  trường.
                </Typography>
                <Typography sx={{ fontSize: 15, fontWeight: 700, lineHeight: "normal" }} width="463px" mt='50px'>
                  Webiste SỨC KHOẺ MÔI TRƯỜNG CENRE thuộc quản lý của Trung tâm
                  nghiên cứu môi trường, không khí và nước - Viện Khoa học Khí
                  tượng Thủy Văn& Biến đổi khí hậu.
                </Typography>
                <Button variant="contained" sx={{mt: 6, borderRadius: '20px'}}>Xem thêm về chúng tôi</Button>
              </Box>
            </Stack>
          </Container>
        </Box>
        <Box
          bgcolor="#003B72"
          width="500px"
          height="500px"
          sx={{ position: "relative" }}
          mt='-30px'
        >
          <img
            src={PERSON}
            alt=""
            height="480px"
            style={{ position: "absolute", bottom: 0, left: "-45%" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Introduce;
