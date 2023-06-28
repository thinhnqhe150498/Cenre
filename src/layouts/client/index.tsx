import { Fragment } from "react";
import ClientHeader from "./Header";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";

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
        <Container>
          <Outlet />
        </Container>
      </Box>
    </Fragment>
  );
};

export default ClientLayout;
