import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import BG_BODY from "../../../assets/images/bg-body.png";
import useBackGround from "../../../hooks/useBackGround";
import ENVELOP from "../../../assets/images/contact/envelop.png";
import PHONE from "../../../assets/images/contact/phone.png";
import FB from "../../../assets/images/contact/fb.png";
import LOCATION from "../../../assets/images/contact/location.png";
const ClientContact = () => {
  const isLight = useBackGround();
  return (
    <Box
      sx={{
        backgroundImage: `url(${BG_BODY})`,
        width: "100%",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Box
        className="App"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "64%",
          bgcolor: "background.paper",
          boxShadow: 24,
        }}
      >
        <Grid container>
        <Grid item xs={12} sm={12} lg={7}>
            <Box
              style={{
                maxWidth: "100%",
                padding: "20px 5px",
                backgroundColor: "#3297a8",
              }}
            >
              <CardContent>
                <Typography
                  gutterBottom
                  color="#000"
                  fontSize="25px"
                  textAlign="center"
                  mb={2}
                >
                  Liên hệ
                </Typography>
                <Typography variant="body2" color="#000" mb={2} gutterBottom>
                  Điền vào form và chúng tôi sẽ trả lời lại trong 24h
                </Typography>
                <form>
                  <Grid container spacing={1}>
                    <Grid xs={12} item>
                      <TextField
                        placeholder="Nhập tên của bạn"
                        label="Nhập tên của bạn"
                        variant="outlined"
                        fullWidth
                        required
                        sx={{mb: 1}}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type="email"
                        placeholder="Nhập email"
                        label="Nhập email"
                        variant="outlined"
                        fullWidth
                        required
                        sx={{mb: 1}}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type="number"
                        placeholder="Nhập số điện thoại"
                        label="Nhập số điện thoại"
                        variant="outlined"
                        fullWidth
                        sx={{mb: 1}}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        sx={{ mb: 2 }}
                        label="Điền thông tin tại đây"
                        multiline
                        rows={4}
                        placeholder="Điền thông tin tại đây"
                        variant="outlined"
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="secondary"
                        fullWidth
                      >
                        Gửi
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Box>
          </Grid>
          <Grid item display={{xs: 'none', sm: 'none', lg: 'block'}} lg={5}>
            <Box
              sx={{
                bgcolor: "#181936",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "60px",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <Box display="flex" alignItems="center" gap="10px">
                <img src={PHONE} style={{transform: 'translateX(-13px)'}} height="55px" width="70px" />
                <Box>
                  <Typography color="#fff" mb="5px">
                    Điện thoại
                  </Typography>
                  <Typography color="#fff">+82 123 4567</Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" gap="20px">
                <img src={ENVELOP} height="55px" width="70px" />
                <Box>
                  <Typography color="#fff" mb="5px">
                    Địa chỉ Email
                  </Typography>
                  <Typography color="#fff">abc@gmail.com</Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" gap="10px">
                <img src={FB} height="55px" style={{transform: 'translateX(-10px)'}} width="70px" />
                <Box>
                  <Typography color="#fff" mb="5px">
                    Facebook
                  </Typography>
                  <Typography color="#fff">www.abc.com</Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" justifyContent='center' gap="10px">
                  <img src={LOCATION} height="55px" style={{transform: 'translateX(-20px)'}} width="70px" />
                <Box>
                  <Typography color="#fff" mb="5px">
                    Địa điểm
                  </Typography>
                  <Typography color="#fff">Hòa Lạc, Hà Nội</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          
        </Grid>
      </Box>
    </Box>
  );
};

export default ClientContact;
