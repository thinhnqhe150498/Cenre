import React from 'react';
import { Typography, Card, CardContent ,Grid} from '@mui/material';

interface ILeftCard {
  title: string;
  num: string;
  sugest: string;
  avg: string;
  index:number;
}

const LeftCard = (props: ILeftCard) => {
  return (
    <>
      <Grid item lg={2}>
        {props.index === 1 || props.index === 3 || props.index === 5 ? (
          <Card  sx={{ bgcolor: "#1D609D", width: 120, mt: 2, height: 120, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '1px solid #ccc', borderRadius: 4 }}>
            <CardContent>
              <Typography sx={{ fontSize: 6.8,color: "white" }} color="text.secondary" gutterBottom>
                {props.title}
              </Typography>
              <Typography sx={{ fontSize: 20,color: "white" }} variant="h5" component="div">
                {props.num}
              </Typography>
              <Typography sx={{ fontSize: 6.8,color: "white"}} color="text.secondary">
                {props.sugest}
              </Typography>
              <Typography sx={{ mt:3,color: "white"}} variant="body2">{props.avg}</Typography>
            </CardContent>
          </Card>
        ) : (<Card  sx={{bgcolor: "#fff", width: 120, mt: 2, height: 120, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '1px solid #ccc', borderRadius: 4 }}>
          <CardContent>
            <Typography sx={{ color: "#003B72", fontSize: 6.8 }} color="text.secondary" gutterBottom>
              {props.title}
            </Typography>
            <Typography sx={{ color: "#003B72",fontSize: 20 }} variant="h5" component="div">
              {props.num}
            </Typography>
            <Typography sx={{ color: "#003B72",fontSize: 6.8}} color="text.secondary">
              {props.sugest}
            </Typography>
            <Typography sx={{ color: "#003B72",mt:1}} variant="body2">{props.avg}</Typography>
          </CardContent>
        </Card>) }
      </Grid>
    </>
  );
};

export default LeftCard; 
