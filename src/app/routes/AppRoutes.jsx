import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const MainLayout = lazy(() => import("../layouts/MainLayout"));
const LandingLayout = lazy(() => import("../layouts/LandingLayout"));
const BlogDetail = lazy(() => import("../../pages/landing/BlogDetail"));
const ProgramDetail = lazy(() => import("../../pages/landing/ProgramDetail"));
const PPDB = lazy(() => import("../../pages/main/PPDB"));
const Profile = lazy(() => import("../../pages/main/Profile"));
const SkillProgram = lazy(() => import("../../pages/main/SkillProgram"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <LandingLayout /> },
      { path: "/berita/:id", element: <BlogDetail /> },
      { path: "/program-keahlian/:slug", element: <ProgramDetail /> },
      { path: "/ppdb", element: <PPDB /> },
      { path: "/profil", element: <Profile /> },
      { path: "/program-keahlian", element: <SkillProgram /> },
    ],
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
