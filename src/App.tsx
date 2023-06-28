import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RootProvider } from "./contexts/RootContext";
import ClientHome from "./pages/client/home";
import AdminHome from "./pages/admin/home";
import ClientLayout from "./layouts/client";

function App() {
  return (
    <>
      <RootProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<>Chua co trang nay</>} />
            <Route path="/client" element={<ClientLayout />}>
              <Route index={true} element={<ClientHome />} />
              <Route path="client" index={true} element={<ClientHome />} />
            </Route>
            <Route path="admin" element={<AdminHome />} />
          </Routes>
        </BrowserRouter>
      </RootProvider>
    </>
  );
}

export default App;
