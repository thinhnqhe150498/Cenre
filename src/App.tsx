import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RootProvider } from "./contexts/RootContext";
import ClientHome from "./pages/client/home";
import AdminHome from "./pages/admin/home";
import ClientLayout from "./layouts/client";
import ClientContact from "./pages/client/contact";
import ClientHomePage from "./pages/client/weather";
import ClientIntro from "./pages/client/home";
import ClientWeather from "./pages/client/weather-page";
import { ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { LightTheme, darkTheme } from "./themes/theme";
import './App.css'
import ClientHealthAndActivity from "./pages/client/health-and-activity";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import AdminLayout from "./layouts/admin";
import { ProSidebarProvider  } from "react-pro-sidebar";
function App() {
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
    const getCurrentTime = () => {
      const currentDate = new Date();
      const currentHour = currentDate.getHours();

      if (currentHour >= 6 && currentHour < 18) {
        setTheme(LightTheme);
      } else {
        setTheme(darkTheme);
      }
    };

    getCurrentTime();

    const interval = setInterval(() => {
      getCurrentTime();
    }, 60000); // Update every minute

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <RootProvider>
        <ThemeProvider theme={theme}>
          <ProSidebarProvider>
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<>Chua co trang nay</>} />
              <Route path="/client" element={<ClientLayout />}>
                <Route index={true} path="intro" element={<ClientIntro />} />
                <Route path="contact" element={<ClientContact />} />
                <Route path="health" element={<ClientHealthAndActivity />} />
                <Route path="home" element={<ClientHomePage />} />
                <Route path="weather" element={<ClientWeather />} />
              </Route>
              <Route path="/admin" element={<AdminLayout />}>
              <Route index={true} element={<AdminHome />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </BrowserRouter>
          </ProSidebarProvider>
        </ThemeProvider>
      </RootProvider>
    </>
  );
}

export default App;
