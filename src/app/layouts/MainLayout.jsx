import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";

function LoadingFallback() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-3">
      <div className="w-8 h-8 border-3 border-orange-50 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-sm text-gray-500 font-medium">Memuat Halaman...</p>
    </div>
  );
}

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
