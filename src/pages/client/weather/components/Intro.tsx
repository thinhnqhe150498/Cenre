import React from 'react'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
const Intro = () => {
  return (
    <Box mt={2}
  >
    <Card sx={{ width: '100%'}}>
      <CardMedia 
          component="video"
          autoPlay
          loop
          src="https://www.youtube.com/watch?v=Spy-hQTCE5Y"
          controls
          height='900'
      >
      </CardMedia>
    </Card>
  </Box>
  )
}

export default Intro