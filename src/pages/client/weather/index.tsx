import React from "react";
import { Box } from "@mui/material";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Intro from "./components/Intro";

const ClientHomePage = () => {
  return (
    <>
      <Box width="100%">
        <Intro />
      </Box>
      <Box
        display="flex"
        px="45px"
        gap="35px"
        width="100%"
      >
          <LeftSide />
          <RightSide />
      </Box>
    </>
  );
};

export default ClientHomePage;
