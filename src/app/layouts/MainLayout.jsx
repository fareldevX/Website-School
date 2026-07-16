import Navbar from "../../components/layouts/Navbar";
import Hero from "../../features/landing/Hero";
import About from "../../features/landing/About";
import Blog from "../../features/landing/Blog";
import Program from "../../features/landing/Program";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Blog />
        <Program />
      </main>
    </>
  );
}

export default MainLayout;
