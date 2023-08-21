import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SourceIcon from "@mui/icons-material/Source";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import StyleIcon from "@mui/icons-material/Style";
import MenuIcon from "@mui/icons-material/Menu";
import USERICON from "../../assets/images/user.png";
import { Link } from "react-router-dom";
const SidebarAdmin = () => {
  const { collapseSidebar, toggleSidebar, broken, collapsed } = useProSidebar();
  return (
    <>
      <Sidebar
        style={{
          height: "100%",
          top: "auto",
          border: 0
        }}
        breakPoint="md"
        backgroundColor="#1F2A40"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          ml="15px"
          mb="25px"
        >
          {!collapsed ? (
            <Typography variant="h3" color="#fff">
              ADMINIS
            </Typography>
          ) : null}
          <IconButton
            onClick={() => {
              broken ? toggleSidebar() : collapseSidebar();
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Box mb="25px">
          <Box display="flex" justifyContent="center" alignItems="center">
            {!collapsed ? (
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={USERICON}
                style={{
                  cursor: "pointer",
                  borderRadius: "50%",
                  marginBottom: "20px",
                }}
              />
            ) : null}
          </Box>
          <Box textAlign="center">
            {!collapsed ? (
              <Typography color="#fff" sx={{ m: "10px 0 0 0" }}>
                Ed Roh
              </Typography>
            ) : null}
            {!collapsed ? (
              <Typography variant="h5" color="#fff">
                VP Fancy Admin
              </Typography>
            ) : null}
          </Box>
        </Box>
        <Menu
          menuItemStyles={{
            button: ({ active }) => {
              return {
                backgroundColor: active ? "#fff" : undefined,
              };
            },
          }}
        >
          <MenuItem
            active={location.pathname === "/admin"}
            icon={<DashboardIcon />}
            component={<Link to="/admin" />}
          >
            {" "}
            Dashboard{" "}
          </MenuItem>
          <MenuItem
            icon={<SourceIcon />}
            component={<Link to="/admin/content" />}
          >
            {" "}
            Content{" "}
          </MenuItem>
          <MenuItem icon={<AnalyticsIcon />}> Analytics </MenuItem>
          <MenuItem icon={<StyleIcon />}> Customization </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

export default SidebarAdmin;
