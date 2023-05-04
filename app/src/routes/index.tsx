import { Navigate, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
