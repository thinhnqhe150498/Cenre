import { Box, Pagination } from "@mui/material";
import New from "./New";

const News = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' width='60%'>
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.80)",
          mt: 3,
          mb: 3,
          borderRadius: "10px",
        }}
      >
        <New />
        <New />
        <New />
        <New />
        <New />
      </Box>
      <Pagination count={10} color="primary" size="large" />
    </Box>
  );
};

export default News;
