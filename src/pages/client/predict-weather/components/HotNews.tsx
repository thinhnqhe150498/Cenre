import { Box, Typography } from "@mui/material";
import HotNew from "./HotNew";

const HotNews = () => {
  return (
    <Box
      sx={{ borderRadius: "10px" }}
      width="100%"
      bgcolor="rgba(255, 255, 255, 0.80)"
      mt={2}
      px={3}
    >
        <Typography sx={{fontSize: '25px', borderBottom: '1px solid #000', pb: '2px', pt: 2}}>Tin nổi bật</Typography>
        <HotNew />
        <HotNew />
        <HotNew />
        <Box pt={2}></Box>
    </Box>
  );
};

export default HotNews;
