import { Navigate, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Categories from "@/pages/Categories";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}
