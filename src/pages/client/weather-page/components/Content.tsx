import { Box, Grid, Typography, useTheme } from "@mui/material";
import RAIN from "../../../../assets/images/weather-page/icon _rain mix_.png";
import useBackGround from "../../../../hooks/useBackGround";
import { weatherContent } from "../../../../services/raw_data";
export const Content = () => {
  const theme = useTheme();
  const isLight = useBackGround();
  return (
    <>
      <Box
        bgcolor={isLight ? "#fff" : "rgba(255, 255, 255, 0.20)"}
        mt={4}
        borderRadius="10px"
        px="51px"
      >
        <Typography
          sx={{
            fontSize: "35px",
            pt: "30px",
            color: theme.palette.primary.main,
            fontWeight: 400,
          }}
        >
          Thời tiết hôm nay tại tp Hồ Chí Minh,
        </Typography>
        <Typography
          sx={{
            fontSize: "75px",
            color: theme.palette.primary.main,
          }}
        >
          35<sup style={{ fontSize: "45px" }}>&deg;</sup>
          <sup style={{ fontSize: "60px" }}>c</sup>
        </Typography>

        <Grid container mt={4} spacing={4}>
          <Grid item xl={6} lg={12} md={12}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom="1px solid #333"
              pb="4px"
            >
              <Box display="flex" alignItems="center" gap={1}>
                <img
                  src={RAIN}
                  style={{ objectFit: "contain" }}
                  alt=""
                  height="30px"
                  width="40px"
                />
                <Typography
                  sx={{ color: theme.palette.primary.main }}
                  fontSize="20px"
                  fontWeight={700}
                >
                  Lượng mưa
                </Typography>
              </Box>
              <Typography
                sx={{ color: theme.palette.primary.main }}
                fontSize="18px"
                fontWeight={700}
              >
                100mm/24h
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container mt={1} spacing={4} pb={8}>
          {weatherContent.map((item, index) => (
            <Grid item xl={6} lg={12} md={12}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom="1px solid #333"
                pb="4px"
                key={index}
              >
                <Box display="flex" alignItems="center" gap={1}>
                  <img src={item.icon} alt="" height="30px" width="40px" />
                  <Typography
                    sx={{ color: theme.palette.primary.main }}
                    fontSize="20px"
                    fontWeight={700}
                  >
                    {item.title}
                  </Typography>
                </Box>
                <Typography
                  sx={{ color: theme.palette.primary.main }}
                  fontSize="18px"
                  fontWeight={700}
                >
                  {item.des}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

