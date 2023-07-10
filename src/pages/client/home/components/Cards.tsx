import React from "react";
import {
  Grid,
  Button,
  Typography,
  CardMedia,
  Card,
  useTheme,
} from "@mui/material";
interface CardItem {
  logo: string;
  title: string;
  desc: string;
  index: number;
}



const Cards = (props: CardItem) => {
  const theme = useTheme()
  return (
    <>
      <Grid item lg={4} md={6}>
        {props.index === 1 || props.index === 3 || props.index === 5 ? (
          <Card
            sx={{
              textAlign: "center",
              height: "350px",
              display: "flex",
              flexDirection: "column",
              bgcolor: "#003B72",
            }}
          >
            <CardMedia sx={{ mt: 2 }}>
              <img
                src={`${props.logo}`}
                alt=""
                height="60px"
                width="60px"
              />
            </CardMedia>
            <Typography
              mt={2}
              sx={{
                fontSize: 20,
                fontWeight: 800,
                lineHeight: "normal",
                color: "#fff",
              }}
              mb={3}
            >
              {props.title}
            </Typography>
            <Typography variant="h5" mx={3} color="#fff">
              {props.desc}
            </Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: "20px",
                margin: "auto auto 0",
                transform: "translateY(-8px)",
                bgcolor: "#fff",
              }}
            >
              <Typography
                sx={{ fontSize: 14, fontWeight: 700, px: 2, color: theme.palette.secondary.main }}
              >
                Chi tiết
              </Typography>
            </Button>
          </Card>
        ) : (
          <Card
            sx={{
              textAlign: "center",
              height: "350px",
              display: "flex",
              flexDirection: "column",
              bgcolor: theme.status.danger,
            }}
          >
            <CardMedia sx={{ mt: 2 }}>
              <img
                src={`${props.logo}`}
                alt=""
                height="60px"
                width="60px"
                style={{ color: theme.palette.primary.main }}
              />
            </CardMedia>
            <Typography
              mt={2}
              sx={{
                fontSize: 20,
                fontWeight: 800,
                lineHeight: "normal",
                color: theme.palette.primary.main,
              }}
              mb={3}
            >
              {props.title}
            </Typography>
            <Typography variant="h5" mx={3} sx={{color:theme.palette.primary.main}}>
              {props.desc}
            </Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: "20px",
                margin: "auto auto 0",
                transform: "translateY(-8px)",
                bgcolor: theme.palette.secondary.main,
              }}
            >
              <Typography
                sx={{ fontSize: 14, fontWeight: 700, px: 2, color: "#fff" }}
              >
                Chi tiết
              </Typography>
            </Button>
          </Card>
        )}
      </Grid>
    </>
  );
};

export default Cards;
