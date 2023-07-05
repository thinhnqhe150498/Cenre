import { Box, Grid, Typography } from "@mui/material";
import { homeSupplies } from '../../../../services/raw_data';
import Cards from "./Cards";
const Supplies = () => {
  
  return (
    <Box mx='380px' mb={5}>
      <Box display="flex" justifyContent="center" mt="70px">
        <Typography
          sx={{
            fontSize: 30,
            fontWeight: 900,
            lineHeight: "normal",
            width: "500px",
            textAlign: "center",
            color: "#003B72",
          }}
          variant="h1"
        >
          SỨC KHOẺ MÔI TRƯỜNG CENRE CUNG CẤP
        </Typography>
      </Box>
      <Grid container mt={5} spacing={3}>
        {
          homeSupplies.map((item, index) => (            
            <Cards logo={item.logo} title={item.title} desc={item.desc} index={index} />
          ))
        }
      </Grid>
      
    </Box>
  );
};

export default Supplies;
