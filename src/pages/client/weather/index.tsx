import React from 'react'
import { Box } from '@mui/material';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

const ClientWeather = () => {
  return (
    <Box display='flex' px='45px' gap='35px' width='100%'>
        <LeftSide />
        <RightSide /> 
    </Box>
  )
}

export default ClientWeather