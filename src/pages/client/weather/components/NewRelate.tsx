import { Box, Typography } from "@mui/material";
import NEWS_REPORT from "../../../../assets/images/weather_report.png";
const NewRelate = () => {
  return (
    <Box display="flex" gap="20px" mb={1}>
      <img src={NEWS_REPORT} width="150px" height="100px" />
      <Box display="flex" flexDirection="column" pr="20px">
        <Typography fontWeight="bold" fontSize="18px">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </Typography>
        <Typography
          fontWeight="400"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            lineClamp: 2,
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry...
        </Typography>
      </Box>
    </Box>
  );
};

export default NewRelate;
