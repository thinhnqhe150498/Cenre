import React from "react";
import LeftCard from "./LeftCard";
import { Stack } from '@mui/material';

const LeftSide = () => {
  return (
    <Stack direction='column'>
      <LeftCard />
      <LeftCard />
      <LeftCard />
      <LeftCard />
      <LeftCard />
      <LeftCard />
    </Stack>
  );
};

export default LeftSide;
