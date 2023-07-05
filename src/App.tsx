import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RootProvider } from "./contexts/RootContext";
import ClientHome from "./pages/client/home";
import AdminHome from "./pages/admin/home";
import ClientLayout from "./layouts/client";
import ClientWeather from "./pages/client/weather";
import ClientContact from "./pages/client/contact";

function App() {
  return (
    <>
      <RootProvider>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<>Chua co trang nay</>} />
            <Route path="/client" element={<ClientLayout />}>
              <Route index={true} path="intro" element={<ClientHome />} />
              <Route path="contact" element={<ClientContact />} />
              <Route path="weather" element={<ClientWeather />} />
            </Route>
            <Route path="admin" element={<AdminHome />} />
          </Routes>
        </BrowserRouter>
      </RootProvider>
    </>
  );
}

export default App;
