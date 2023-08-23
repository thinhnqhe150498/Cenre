import {
  useMediaQuery,
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Link, NavLink } from "react-router-dom";
import LOGOBRAND from "../../assets/images/logo.png";
import { createBreakpoints } from "@mui/system";
import React from "react";
const breakpoints = createBreakpoints({});

const ClientHeader = () => {
  const navItems = [
    {
      title: "TRANG CHỦ",
      url: "",
    },
    {
      title: "GIỚI THIỆU",
      url: "intro",
    },
    {
      title: "THỜI TIẾT",
      url: "weather",
    },
    {
      title: "CHỈ SỐ",
      url: "weather",
    },
    {
      title: "DỰ BÁO",
      url: "weather",
    },
    {
      title: "SỨC KHỎE",
      url: "weather",
    },
    {
      title: "CHỦ ĐỀ",
      url: "weather",
    },
    {
      title: "TIN TỨC",
      url: "weather",
    },
    {
      title: "LIÊN HỆ",
      url: "weather",
    },
  ];

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <Link to={`/client/${item.url}`} style={{ textDecoration: "none" }}>
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.title}></ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ bgcolor: "#fff" }}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            mr: 2,
            display: { sm: "block", md: "block", lg: "none", xl: "none" },
            color: "#000",
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={LOGOBRAND} height="65px" width="65px" alt="Logo" />
          <Typography
            variant="h6"
            color="#000"
            component="div"
            sx={{ fontSize: 25 }}
          >
            CENRE
          </Typography>
        </Box>
        <Box
          gap="18px"
          sx={{
            display: { md: "none", lg: "flex", xl: "flex", sm: "none" },
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
          <NavLink
            to="/client/predict-weather"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "" : "none",
                textUnderlineOffset: isActive ? "5px" : "0",
              };
            }}
          >
            {({ isActive }) => (
              <Typography sx={typoSX(isActive)}>DỰ BÁO KHÍ HẬU</Typography>
            )}
          </NavLink>
          <NavLink
            to="/client/health"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "" : "none",
                textUnderlineOffset: isActive ? "5px" : "0",
              };
            }}
          >
            {({ isActive }) => (
              <Typography sx={typoSX(isActive)}>SỨC KHỎE & HOẠT ĐỘNG</Typography>
            )}
          </NavLink>
          <Link to="/f" style={{ textDecoration: "none" }}>
            <Typography sx={typoSX}>CHỦ ĐỀ</Typography>
          </Link>
          <Link to="/g" style={{ textDecoration: "none" }}>
            <Typography sx={typoSX}>TIN TỨC</Typography>
          </Link>
          <NavLink
            to="/client/contact"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? "" : "none",
                textUnderlineOffset: isActive ? "5px" : "0",
              };
            }}
          >
            {({ isActive }) => (
              <Typography sx={typoSX(isActive)}>LIÊN HỆ</Typography>
            )}
          </NavLink>
        </Box>
        <Button variant="contained" size="small">
          Bà Rịa – Vũng Tàu
        </Button>
      </Toolbar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: "100%" },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
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
  color: "#000",
  fontWeight: 700,
  "&:hover": {
    color: "blue",
  },
};

export default ClientHeader;
