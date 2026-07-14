import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import BlogDetail from "../../features/landing/BlogDetail";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
    </Routes>
  );
}

export default AppRoutes;
