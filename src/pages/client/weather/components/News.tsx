import { Box, Button, Typography } from "@mui/material";
import { newsMain } from "../../../../services/raw_data";
import NewsTitle from "./NewsTitle";
import NewRelate from "./NewRelate";

const News = () => {
  return (
    <>
      <Typography
        sx={{ fontSize: "30px", mt: "20px", color: "#003B72", mb: 2 }}
      >
        TIN TỨC
      </Typography>

        <Box
          sx={{
            bgcolor: "rgba(255, 255, 255, 0.7)",
            borderRadius: "8px",
            display: "flex",
          }}
        >
              {newsMain.map((item) => (
                  <NewsTitle img={item.img} title={item.title} />
              ))}
          <Box py='20px'>
              <NewRelate />
              <NewRelate />
              <NewRelate />
              <Box display='flex' justifyContent='center'>
              <Button variant="contained" sx={{bgcolor: '#003B72', color: '#fff', px: '20px'}}>Xem thêm</Button>
              </Box>
          </Box>
        </Box>
    </>
  );
};

export default News;
