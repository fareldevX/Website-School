import Hero from "../../features/landing/Hero";
import About from "../../features/landing/About";
import Blog from "../../features/landing/Blog";
import Program from "../../features/landing/Program";
import Action from "../../features/landing/Action";

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
