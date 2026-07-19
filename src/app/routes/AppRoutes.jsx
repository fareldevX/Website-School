import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import LandingLayout from "../layouts/LandingLayout";
import BlogDetail from "../../features/landing/BlogDetail";
import ProgramDetail from "../../features/landing/ProgramDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <LandingLayout /> },
      { path: "/berita/:id", element: <BlogDetail /> },
      { path: "/program-keahlian/:slug", element: <ProgramDetail /> },
    ],
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
