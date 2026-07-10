import Navbar from "../../components/layouts/Navbar";
import Hero from "../../features/landing/Hero";
import Blog from "../../features/landing/Blog";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Blog />
      </main>
    </>
  );
}

export default MainLayout;
