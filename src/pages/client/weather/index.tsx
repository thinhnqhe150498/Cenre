import { Box } from "@mui/material";
import BG_BODY from '../../../assets/images/bg-body.png'
import Intro from "./components/Intro";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import MAP from './../../../assets/images/map.png'
const ClientHome = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${BG_BODY})`,
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Box sx={{maxWidth: '1800px', m: '0 auto', padding: '0 20px',}}>
          <Intro />
          <Box display="flex" gap="35px">
            <LeftSide />
            <RightSide />
          </Box>
          <img src={MAP} width='100%' style={{marginBottom: '30px'}} />
        </Box>
      </Box>
    </>
  );
};

export default ClientHome;
