import { Outlet } from "react-router-dom";
import { Topbar } from "./Topbar";
import { Box } from "@mui/material";
import SidebarAdmin from "./Sidebar";

const AdminLayout = () => {
  return (
    <>
      <Box display="flex" height='100vh' bgcolor='#333'>
        <SidebarAdmin />
        <Box flex={1}>
          <Topbar />
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default AdminLayout;
