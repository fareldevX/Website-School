import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
    </Routes>
  );
}

export default AppRoutes;
