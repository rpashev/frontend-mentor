import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/home";
import QRCode from "./pages/qr-code";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/qr-code" element={<QRCode />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
