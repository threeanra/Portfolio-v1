import LoaderHome from "../components/loader/Loader";
import Hero from "../components/hero/Hero";
import AboutMe from "../components/aboutme/AboutMe";
import { useEffect } from "react";
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
      <AboutMe />
      <Hero />
    </div>
  );
}

export default Home;
