import { Box, Typography, Stack, useTheme } from "@mui/material";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from "../../../../utils/ChangingProgressProvider";
export const Statistic = () => {
  const theme = useTheme();
  return (
    <>
      <Typography sx={{ fontSize: "35px", pt: 3, px: 3 }}>
        Chỉ số bệnh hô hấp
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "50px",
          alignItems: "center",
          mx: 3,
          mt: 1,
          mb: 3,
          backgroundColor: "rgba(255, 255, 255, 0.80)",
          backgroundClip: "content-box",
          borderRadius: "10px",
          height: "250px",
        }}
      >
        <Box sx={{ height: 200, width: 200, ml: "20px" }}>
        <ChangingProgressProvider interval={1} values={[0, 66]}>
        {percentage => (
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
          />
        )}
      </ChangingProgressProvider>
        </Box>
        <Stack direction="column" flex={3} gap={4}>
          <Box
            display="flex"
            justifyContent="space-between"
            color={theme.palette.secondary.main}
            sx={{ borderBottom: "1px solid #000" }}
          >
            <Typography fontSize="22px" fontWeight={600}>
              Chỉ Số
            </Typography>
            <Typography fontSize="22px" fontWeight={600}>
              50%
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            color={theme.palette.secondary.main}
            sx={{ borderBottom: "1px solid #000" }}
          >
            <Typography fontSize="22px" fontWeight={600}>
              Chỉ Số
            </Typography>
            <Typography fontSize="22px" fontWeight={600}>
              50%
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            color={theme.palette.secondary.main}
            sx={{ borderBottom: "1px solid #000" }}
          >
            <Typography fontSize="22px" fontWeight={600}>
              Chỉ Số
            </Typography>
            <Typography fontSize="22px" fontWeight={600}>
              50%
            </Typography>
          </Box>
        </Stack>
        <Stack direction="column" gap={2} flex={1} textAlign="center">
          <Typography
            fontSize="22px"
            fontWeight={600}
            color={theme.palette.secondary.main}
          >
            MỨC ĐỘ:
          </Typography>
          <Typography fontSize="22px" fontWeight={600} color="#f00">
            CẢNH BÁO
          </Typography>
        </Stack>
      </Box>
    </>
  );
};
