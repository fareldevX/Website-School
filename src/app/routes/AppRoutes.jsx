import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const MainLayout = lazy(() => import("../layouts/MainLayout"));
const LandingLayout = lazy(() => import("../layouts/LandingLayout"));
const BlogDetail = lazy(() => import("../../pages/landing/BlogDetail"));
const ProgramDetail = lazy(() => import("../../pages/landing/ProgramDetail"));
const PPDB = lazy(() => import("../../pages/main/PPDB"));
const Profile = lazy(() => import("../../pages/main/Profile"));
const SkillProgram = lazy(() => import("../../pages/main/SkillProgram"));
const Blog = lazy(() => import("../../pages/main/Blog"));
const Contact = lazy(() => import("../../pages/main/Contact"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <LandingLayout /> },
      { path: "/ppdb", element: <PPDB /> },
      { path: "/profil", element: <Profile /> },
      { path: "/program-keahlian", element: <SkillProgram /> },
      { path: "/program-keahlian/:slug", element: <ProgramDetail /> },
      { path: "/berita", element: <Blog /> },
      { path: "/berita/:id", element: <BlogDetail /> },
      { path: "/kontak", element: <Contact /> },
    ],
  },
]);

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
