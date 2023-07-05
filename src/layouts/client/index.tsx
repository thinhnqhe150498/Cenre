import { Fragment } from "react";
import ClientHeader from "./Header";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import ClientFooter from "./Footer";

const ClientLayout = () => {
  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <ClientHeader />
        <Outlet />
        <ClientFooter />
      </Box>
    </Fragment>
  );
};

export default ClientLayout;
