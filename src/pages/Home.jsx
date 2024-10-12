import LoaderHome from "../components/loader/Loader";
import Hero from "../components/hero/Hero";
import AboutMe from "../components/aboutme/AboutMe";
import { useEffect } from "react";
import TechStack from "../components/techstack/TechStack";
import Description from "../components/description/Description";
import { Projects } from "../projects/Projects";
function Home() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 3000);
  });
  return (
    <>
      <LoaderHome />
      <Hero />
      <Description />
      <TechStack />
      <Projects />

      <AboutMe />
    </>
  );
}

export default Home;
