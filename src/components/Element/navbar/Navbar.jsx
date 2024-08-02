import { useState, useEffect } from "react";
import { easeInOut, motion } from "framer-motion";
import Logo from "../../../assets/Logo.png";
function Navbar() {
  const navLink = ["About", "Services", "Works", "Contact"];
  const [navActive, setNavActive] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
    document.body.style.overflow = navActive ? "auto" : "hidden";
  };

  const closeNav = () => {
    setNavActive(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -180 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          ease: easeInOut,
          delay: 3.8,
        },
      }}
      className="w-full absolute p-[35px] overflow-hidden"
    >
      <div className="container mx-auto flex justify-between">
        <a href="#home">
          <img src={Logo} className="max-h-8" alt="Logo" />
        </a>
        <ul className="flex flex-col md:flex-row  text-sm md:text-lg md:gap-2 lg:gap-7 text-montreal-regular">
          {navLink.map((link, index) => {
            const href = `#${link.toLowerCase()}`;
            return (
              <li key={index}>
                <a
                  href={href}
                  onClick={closeNav}
                  className="font-montreal-regular"
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
        {/* Mobile Nav */}
        <ul
          id="nav-list"
          className={`${navActive ? "right-0" : "right-[-100%]"} 
           z-[999] md:w-[40%] text-lg transform transition-all duration-1000 ease-expo flex flex-col gap-7 bg-red-500 w-full h-screen fixed text-white text-5xl items-center justify-center top-0 overflow-hidden `}
        >
          <img
            src={Logo}
            alt="Logo"
            className="h-[4rem] mb-5 absolute top-10 left-10"
          />
          {navLink.map((link, index) => {
            const href = link === "Home" ? "/" : `#${link.toLowerCase()}`;
            return (
              <li key={index}>
                <a
                  href={href}
                  onClick={closeNav}
                  className="font-montreal-regular"
                >
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* End Mobile Nav */}

      <div
        className={`p-6 py-8 rounded-full bg-white fixed top-5 right-5 z-[9999] cursor-pointer  ${
          showButton
            ? "scale-100 opacity-100 transition-transform duration-500"
            : "scale-0 opacity-80 pointer-events-none transition-transform duration-500"
        }`}
        onClick={toggleNav}
      >
        <button
          className="flex flex-col justify-center items-center"
          aria-label="Toggle Navigation"
          aria-expanded={navActive}
          aria-controls="nav-list"
        >
          <span
            className={`bg-custom-black block transition-all duration-300 ease-out 
              h-0.5 w-6 rounded-sm ${
                navActive ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              }`}
          ></span>
          <span
            className={`bg-custom-black block transition-all duration-300 ease-out 
              h-0.5 w-6 rounded-sm my-0.5 ${
                navActive ? "opacity-0" : "opacity-100"
              }`}
          ></span>
          <span
            className={`bg-custom-black block transition-all duration-300 ease-out 
              h-0.5 w-6 rounded-sm ${
                navActive ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
              }`}
          ></span>
        </button>
      </div>
    </motion.nav>
  );
}

export default Navbar;
