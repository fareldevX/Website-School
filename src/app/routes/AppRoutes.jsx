import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import BlogDetail from "../../features/landing/BlogDetail";
import ProgramDetail from "../../features/landing/ProgramDetail";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/berita/:id" element={<BlogDetail />} />
      <Route path="/program-keahlian/:slug" element={<ProgramDetail />} />
    </Routes>
  );
}

export default AppRoutes;
