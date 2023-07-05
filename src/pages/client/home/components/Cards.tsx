import React from "react";
import {
  Grid,
  Button,
  Typography,
  CardMedia,
  Card,
} from "@mui/material";
interface CardItem {
  logo: string;
  title: string;
  desc: string;
  index: number;
}


const Cards = (props: CardItem) => {
  return (
    <>
      <Grid item lg={4}>
        {props.index === 1 || props.index === 3 || props.index === 5 ? (
          <Card
            sx={{
              width: 270,
              textAlign: "center",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              bgcolor: "#003B72"
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
            <Typography variant="h5" component="div" color="#fff">
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
                sx={{ fontSize: 14, fontWeight: 700, px: 2, color: "#003B72" }}
              >
                Chi tiết
              </Typography>
            </Button>
          </Card>
        ) : (
          <Card
            sx={{
              width: 270,
              textAlign: "center",
              height: "300px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia sx={{ mt: 2 }}>
              <img
                src={`${props.logo}`}
                alt=""
                height="60px"
                width="60px"
                style={{ color: "#003B72" }}
              />
            </CardMedia>
            <Typography
              mt={2}
              sx={{
                fontSize: 20,
                fontWeight: 800,
                lineHeight: "normal",
                color: "#003B72",
              }}
              mb={3}
            >
              {props.title}
            </Typography>
            <Typography variant="h5" component="div" color="#003B72">
              {props.desc}
            </Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: "20px",
                margin: "auto auto 0",
                transform: "translateY(-8px)",
                bgcolor: "#003B72",
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
