import { useMediaQuery, AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import LOGOBRAND from '../../assets/images/logo.png'


const ClientHeader = () => {
  const isMediumScreen = useMediaQuery((theme: any) => theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery((theme: any) => theme.breakpoints.down("sm"));

  return (
    <AppBar position="static" sx={{ bgcolor: "#fff" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: isSmallScreen ? "column" : "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={LOGOBRAND} height="65px" width="65px" alt="Logo" />
          <Typography variant="h6" color='#000' component="div" sx={{ fontSize: 25 }}>
            CENRE
          </Typography>
        </Box>
        <Box
          gap="18px"
          sx={{
            display: isMediumScreen ? "none" : "flex",
          }}
        >
          <NavLink
            to="/client/home"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "" : "none",
                textUnderlineOffset: isActive ? "5px" : "0",
              };
            }}
          >
            {({ isActive }) => (
              <Typography sx={typoSX(isActive)}>TRANG CHỦ</Typography>
            )}
          </NavLink>
          <NavLink
            to="/client/intro"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "" : "none",
                textUnderlineOffset: isActive ? "5px" : "0",
              };
            }}
          >
            {({ isActive }) => (
              <Typography sx={typoSX(isActive)}>GIỚI THIỆU</Typography>
            )}
          </NavLink>
          <NavLink
            to="/client/weather"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "" : "none",
                textUnderlineOffset: isActive ? "5px" : "0",
              };
            }}
          >
            {({ isActive }) => (
              <Typography sx={typoSX(isActive)}>THỜI TIẾT</Typography>
            )}
          </NavLink>
          <Link to="/c" style={{ textDecoration: "none" }}>
            <Typography sx={typoSX}>CHỈ SỐ MÔI TRƯỜNG</Typography>
          </Link>
          <Link to="/d" style={{ textDecoration: "none" }}>
            <Typography sx={typoSX}>DỰ BÁO KHÍ HẬU</Typography>
          </Link>
          <Link to="/e" style={{ textDecoration: "none" }}>
            <Typography sx={typoSX}>SỨC KHỎE & HOẠT ĐỘNG</Typography>
          </Link>
          <Link to="/f" style={{ textDecoration: "none" }}>
            <Typography sx={typoSX}>CHỦ ĐỀ</Typography>
          </Link>
          <Link to="/g" style={{ textDecoration: "none" }}>
            <Typography sx={typoSX}>TIN TỨC</Typography>
          </Link>
          <Link to="/h" style={{ textDecoration: "none" }}>
            <Typography sx={typoLast}>LIÊN HỆ</Typography>
          </Link>
        </Box>
        <Button variant="contained" size="small">
          Bà Rịa – Vũng Tàu
        </Button>
      </Toolbar>
    </AppBar>
  );
};

const typoSX = (isActive: any) => ({
  borderRight: "1px solid #000",
  paddingRight: "18px",
  color: isActive ? "#003B72" : "#000",
  "&:hover": {
    color: "blue",
  },
});

const typoLast = {
  color: '#000',
  fontWeight: 700,
  "&:hover": {
    color: "blue",
  },
};

export default ClientHeader;

