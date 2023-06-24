import { Routes, Route, BrowserRouter } from "react-router-dom";
import Sobre from "../../Pages/AboutMe";
import HomePage from "../../Pages/HomePage";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  );
}
