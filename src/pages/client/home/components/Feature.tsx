
import { Paper, Stack, Container, Typography, useTheme } from "@mui/material";
const Feature = () => {
  const theme = useTheme();
  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 8, position: "relative", bottom: "200px" }}
    >
      <Stack direction="row" justifyContent="center">
        <Paper
          elevation={1}
          sx={{
            bgcolor: "#003B72;",
            width: "300px",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            position: "relative",
            top: "50px",
          }}
        >
          <Typography variant="h3" sx={{ fontSize: 20, mb: 6 }}>
            THỜI GIAN THỰC
          </Typography>
          <Typography sx={{ fontSize: 16, px: 2 }}>
            Chỉ số sức khỏe môi trường theo không gian và thời gian thực để cung
            cấp thông tin, cảnh báo nhanh cho cộng đồng người dân, các cơ quan
            quản lý, chính quyền.
          </Typography>
        </Paper>
        <Paper
          elevation={1}
          sx={{
            bgcolor: "#fff",
            width: "400px",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Typography color="#003B72" variant="h3" sx={{ fontSize: 20, mb: 9, mt: 8 }}>
            THÔNG TIN XÁC THỰC
          </Typography>
          <Typography color="#003B72" component="p" sx={{ fontSize: 16, px: 5 }}>
            Thông tin, dữ liệu mang tính khoa học cao và độ tin cậy lớn từ các
            cơ quan uy tín, có thẩm quyền trực tiếp. Ngoài ra Website còn được
            Viện Khoa học Khí tượng Thủy Văn& Biến đổi khí hậu trực tiếp giám
            sát và quản lý.
          </Typography>
        </Paper>
        <Paper
          elevation={1}
          sx={{
            bgcolor: "#003B72;",
            width: "300px",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
            position: "relative",
            top: "50px",
          }}
        >
          <Typography variant="h3" sx={{ fontSize: 20, mb: 6 }}>
            TRUY XUẤT DỮ LIỆU
          </Typography>
          <Typography component="p" sx={{ fontSize: 16, px: 2 }}>
            Thông tin, chỉ số được thể hiện qua dạng chữ và biểu đồ giúp người
            sử dụng có cái nhìn tổng quan và chi tiết về dữ liệu. Dữ liệu dễ
            dàng truy xuất, phục vụ công việc, cá nhân cho người sử dụng.
          </Typography>
        </Paper>
      </Stack>
    </Container>
  );
};

export default Feature;
