import { Box, Grid, Typography, useTheme } from "@mui/material";
import { homeSupplies } from '../../../../services/raw_data';
import Cards from "./Cards";
const Supplies = () => {
  const theme = useTheme();
  return (
    <Box mb={5}>
      <Box display="flex" justifyContent="center" mt="70px">
        <Typography
          sx={{
            fontSize: 30,
            fontWeight: 900,
            lineHeight: "normal",
            width: "500px",
            textAlign: "center",
            color: theme.palette.primary.main,
          }}
          variant="h1"
        >
          SỨC KHOẺ MÔI TRƯỜNG CENRE CUNG CẤP
        </Typography>
      </Box>
      <Grid container mt={5} spacing='30px'>
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
