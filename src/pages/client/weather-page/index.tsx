import { Box, Container } from '@mui/material'
import React from 'react'
import Banner from './components/Banner'
import HourTemp from './components/HourTemp'
import BG_BODY from '../../../assets/images/bg-body.png'
import BG_BODY_DARK from '../../../assets/images/bg-dark.jpg'
import RainChart from './components/RainChart'
import { Content } from './components/Content'
import useBackGround from '../../../hooks/useBackGround'
const ClientWeather = () => {
  const isLight = useBackGround()
  return (
    <Box sx={{backgroundImage: isLight? `url(${BG_BODY})`: `url(${BG_BODY_DARK})`, width: '100%', backgroundPosition:'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} width='100%'>
      <Container maxWidth='xl' >
        <Banner />
        <HourTemp />
        <Content />
        <RainChart />
    </Container>
    </Box>
  )
}

export default ClientWeather