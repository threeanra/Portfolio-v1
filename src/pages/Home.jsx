import LoaderHome from "../components/loader/Loader";
import Hero from "../components/hero/Hero";
import AboutMe from "../components/aboutme/AboutMe";
import { useEffect } from "react";
import TechStack from "../components/techstack/TechStack";
import Description from "../components/description/Description";
function Home() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 3000);
  });
  return (
    <div>
      <LoaderHome />
      <Hero />
      <Description />
      <TechStack />

      <AboutMe />
    </div>
  );
}

export default Home;
