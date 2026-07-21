import Hero from "../../pages/landing/Hero";
import About from "../../pages/landing/About";
import Blog from "../../pages/landing/Blog";
import Program from "../../pages/landing/Program";
import Action from "../../pages/landing/Action";

function LandingLayout() {
  return (
    <>
      <Hero />
      <About />
      <Program />
      <Blog />
      <Action />
    </>
  );
}

export default LandingLayout;
