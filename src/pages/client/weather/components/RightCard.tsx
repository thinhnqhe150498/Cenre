import React from 'react';
import { Typography, Card, CardContent,Box,useTheme } from '@mui/material';


interface IRightCard {
  title: string;
  num: string;
  type: string;
  logo: string;
  index: number;
}

const RightCard = (props: IRightCard) => {
  const theme = useTheme()
  return (
    <Card sx={{ mt: 2,borderRadius: '20px',backgroundColor:"rgba(255, 255, 255, 0.7)"}}>
      <CardContent sx={{ display: 'flex',alignItems:'center',mx:'10px',justifyContent:'space-between' }}>
       <Box >
       <Typography sx={{  color: theme.palette.secondary.main, fontWeight: 'bold'}}>
          {props.title}
        </Typography>
        <Typography color={theme.palette.secondary.main}>
          {props.type}
        </Typography>
       </Box>
      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <img 
            src={`${props.logo}`}
            height="30px"
            width="30px"
          />
        <Typography sx={{fontSize:"12px", color: theme.palette.secondary.main, fontWeight: 'bold', mt: '5px' }}>
          {props.num}
        </Typography>
      </Box>
      </CardContent>
    </Card>
  );
};

export default RightCard;
