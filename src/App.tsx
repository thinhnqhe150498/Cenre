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
          <BrowserRouter>
            <Routes>
              <Route path="*" element={<>Chua co trang nay</>} />
              <Route path="/client" element={<ClientLayout />}>
                <Route index={true} path="intro" element={<ClientIntro />} />
                <Route path="contact" element={<ClientContact />} />
                <Route path="home" element={<ClientHomePage />} />
                <Route path="weather" element={<ClientWeather />} />
              </Route>
              <Route path="admin" element={<AdminHome />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </RootProvider>
    </>
  );
}

export default App;
