import { Typography, Box, Container } from "@mui/material";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Introduce from "./components/Introduce";
import Supplies from "./components/Supplies";
import BG_BODY from "../../../assets/images/bg-body.png";
import useBackGround from "../../../hooks/useBackGround";
import BG_BODY_DARK from '../../../assets/images/bg-dark.jpg' 
const ClientIntro = () => {
  const isLight = useBackGround()
  return (
    <>
      <Hero />
      <Box
        sx={{
          backgroundImage: isLight? `url(${BG_BODY})`: `url(${BG_BODY_DARK})`,
          width: "100%",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="lg">
          <Feature />
        </Container>
        <Introduce />
        <Container maxWidth="lg">
          <Supplies />
        </Container>
      </Box>
    </>
  );
};

export default ClientIntro;
