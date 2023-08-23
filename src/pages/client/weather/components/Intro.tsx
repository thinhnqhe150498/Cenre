import React from "react";
import { Box, CardMedia, Typography, Card } from "@mui/material";
import Video from "../intro2.mp4"

const Intro = () => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        height: "85vh",
        minHeight: "300px",
        mt: 5,
      }}
    >
      <Card sx={{height: '100%'}}>
        <CardMedia
          component="video"
          src={Video}
          autoPlay
          loop
          muted
          sx={{height: '100%',objectFit:'cover',
          top: 0,
          left: 0,
          width: "100%",
         }}
        />
      </Card>
    </Box>
  );
};

export default Intro;
