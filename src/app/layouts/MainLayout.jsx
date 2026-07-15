import Navbar from "../../components/layouts/Navbar";
import Hero from "../../features/landing/Hero";
import About from "../../features/landing/About";
import Blog from "../../features/landing/Blog";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Blog />
      </main>
    </>
  );
}

export default MainLayout;
