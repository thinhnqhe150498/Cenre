import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgimg from "./bg/backimg.jpg";
import bg from "./bg/signin.svg";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const boxstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  height: "70%",
  bgcolor: "background.paper",
  boxShadow: 24,
};

export default function Login() {
  const [open, setOpen] = useState(false);
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setOpen(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5",
        }}
      >
        <Box sx={boxstyle}>
          <Grid container>
            <Grid item xs={12} sm={12} lg={6}>
              <Box
                sx={{
                  backgroundImage: `url(${bg})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  height: "63vh",
                  backgroundPosition: "center",
                  color: "#f5f5f5",
                }}
              ></Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <Box
                sx={{
                  backgroundSize: "cover",
                  height: "70vh",
                  minHeight: "500px",
                  backgroundColor: "#3b33d5",
                }}
              >
                <Container>
                  <Box pt={5}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Avatar sx={{ mb: "8px", bgcolor: "#ffffff" }}>
                        <LockOutlinedIcon />
                      </Avatar>
                      <Typography fontSize="30px">Sign In</Typography>
                    </Box>
                    <Box
                      component="form"
                      noValidate
                      onSubmit={handleSubmit}
                      sx={{ mt: 2 }}
                    >
                      <Grid container spacing={1}>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em", mb: '20px' }}>
                          <TextField
                            required
                            fullWidth
                            id="email"
                            label="Username"
                            name="email"
                            autoComplete="email"
                          />
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            autoComplete="new-password"
                            InputProps={{
                              endAdornment: (
                                <IconButton
                                  aria-label="toggle password visibility"
                                  edge="end"
                                  onClick={handleClickShowPassword}
                                  size="large"
                                >
                                  {showPassword? <VisibilityIcon />: <VisibilityOffIcon />}
                                </IconButton>
                              ),
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <Stack
                            direction="row"
                            justifyContent="space-between"
                            spacing={2}
                          >
                            <FormControlLabel
                              sx={{ width: "60%" }}
                              onClick={() => setRemember(!remember)}
                              control={<Checkbox checked={remember} />}
                              label="Remember me"
                            />
                            <Typography
                              variant="body1"
                              component="span"
                              onClick={() => {
                                navigate("/reset-password");
                              }}
                              style={{ marginTop: "10px", cursor: "pointer" }}
                            >
                              Forgot password?
                            </Typography>
                          </Stack>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          display="flex"
                          justifyContent="center"
                        >
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            sx={{
                              mt: "10px",
                              mr: "20px",
                              borderRadius: 28,
                              color: "#ffffff",
                              minWidth: "340px",
                              backgroundColor: "#FF9A01",
                            }}
                          >
                            Sign in
                          </Button>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          display="flex"
                          justifyContent="center"
                        >
                          <Stack direction="row" spacing={3}>
                            <Typography sx={{ mt: "10px", fontSize: "18px" }}>
                              Not registered yet?{" "}
                              <span
                                style={{ color: "#beb4fb", cursor: "pointer" }}
                                onClick={() => {
                                  navigate("/register");
                                }}
                              >
                                Create an Account
                              </span>
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Container>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
