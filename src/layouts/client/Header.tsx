import { Box, Button, Container, Stack, Typography } from "@mui/material";

const ClientHeader = () => {
  return (
    <Box sx={{ width: 1 }}>
      <Stack
        spacing={1}
        direction="row"
        sx={{ width: 1, alignItems: "center", justifyContent: "space-between" }}
      >
        <Typography component="span">Logo</Typography>
        <Typography component="span" sx={{ borderRight: 1, pr: 2 }}>
          Trang chu
        </Typography>
        <Typography component="span" sx={{ borderRight: 1, pr: 2 }}>
          Gioi thieu
        </Typography>
        <Typography component="span" sx={{ borderRight: 1, pr: 2 }}>
          Thoi tiet
        </Typography>
        <Typography component="span" sx={{ borderRight: 1, pr: 2 }}>
          Chi so moi truong
        </Typography>
        <Typography component="span" sx={{ borderRight: 1, pr: 2 }}>
          Du bao khi hau
        </Typography>
        <Typography component="span" sx={{ borderRight: 1, pr: 2 }}>
          Suc khoe hoat dong{" "}
        </Typography>
        <Typography component="span" sx={{ borderRight: 1, pr: 2 }}>
          Chu de
        </Typography>
        <Typography component="span" sx={{ borderRight: 1, pr: 2 }}>
          Tin tuc
        </Typography>
        <Typography component="span" sx={{ borderRight: 1, pr: 2 }}>
          Lien he
        </Typography>
        <Button variant="contained">Ba Ria - Vung Tau</Button>
      </Stack>
    </Box>
  );
};

export default ClientHeader;
