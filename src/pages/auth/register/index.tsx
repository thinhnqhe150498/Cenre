import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bgimg from "./bg/backimg.jpg";
import bg from "./bg/signin.svg";
import {
  strengthColor,
  strengthIndicator,
} from "../../../utils/password-strength";

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

interface ILevel {
  color: string;
  label: string;
}

export default function Register() {
  const [open, setOpen] = useState(false);
  const [level, setLevel] = useState<ILevel>();
  const changePassword = (value: string) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword("");
  }, []);
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
                style={{
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
                      <Typography fontSize="30px">Create Account</Typography>
                    </Box>
                    <Box
                      component="form"
                      noValidate
                      onSubmit={handleSubmit}
                      sx={{ mt: 2 }}
                    >
                      <Grid container spacing={1}>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em", mb: '15px' }}>
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
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            onChange={(e) => {
                              changePassword(e.target.value);
                            }}
                          />
                          <FormControl fullWidth sx={{ mt: 1 }}>
                            <Grid container spacing={2} alignItems="center">
                              <Grid item>
                                <Box
                                  sx={{
                                    bgcolor: level?.color,
                                    width: 85,
                                    height: 8,
                                    borderRadius: "7px",
                                  }}
                                />
                              </Grid>
                              <Grid item>
                                <Typography
                                  variant="subtitle1"
                                  fontSize="0.75rem"
                                >
                                  {level?.label}
                                </Typography>
                              </Grid>
                            </Grid>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
                          <TextField
                            required
                            fullWidth
                            name="confirmpassword"
                            label="Confirm Password"
                            type="password"
                            id="confirmpassword"
                            autoComplete="new-password"
                          />
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
                            Sign up
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
                              Already have an Account?{" "}
                              <span
                                style={{ color: "#beb4fb", cursor: "pointer" }}
                                onClick={() => {
                                  navigate("/login");
                                }}
                              >
                                Sign In
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
