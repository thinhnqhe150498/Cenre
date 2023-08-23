import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";

interface SwiperNews {
  title: string;
  img: string;
}

const StyledButton = styled(Button)({
  background: "#1976D2",
  color: "white",
  borderRadius: "20px",
  fontWeight: "bold",
  fontSize: "14px",
  transition: "background 0.3s, color 0.3s",
  "&:hover": {
    background: "#1976D2", 
  },
});

const NewsTitle = (props: SwiperNews) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth:"45%",
        padding: '20px 20px 32px 20px',
        borderRadius: "8px",
      }}
    >
      <img
        src={props.img}
        alt={props.title}
        height="310px"
        width="100%"
        style={{
          objectFit: "cover",
          marginBottom: "10px",
          borderRadius: "8px",
        }}
      />
      <Typography sx={{fontSize: '18px', mt: 1, lineHeight: 1.4}}>{props.title}</Typography>
    </Box>
  );
};

export default NewsTitle;
