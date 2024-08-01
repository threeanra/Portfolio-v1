import { useState, useEffect } from "react";
import { easeInOut, motion } from "framer-motion";
import Logo from "../../assets/Logo.png";

function Navbar() {
  const navLink = ["Home", "About", "Services", "Works", "Contact"];
  const [navActive, setNavActive] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeNav = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
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

  useEffect(() => {
    if (navActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [navActive]);

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
        <ul className="hidden md:flex items-center md:gap-2 lg:gap-7 text-theme text-lg">
          {navLink.map((link, index) => (
            <li key={index}>
              <a href={`#${link.toLowerCase()}`} onClick={closeNav}>
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Nav */}
        <ul
          id="nav-list"
          className={`${navActive ? "right-0" : "right-[-100%]"} 
           z-[999] md:w-[40%] text-lg transform transition-all duration-1000 ease-out flex flex-col gap-7 bg-custom-black w-full h-screen fixed items-center justify-center top-0 overflow-hidden`}
        >
          {navLink.map((link, index) => (
            <li key={index}>
              <a href={`#${link.toLowerCase()}`} onClick={closeNav}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* End Mobile Nav */}

      <div
        className={`p-6 py-8 rounded-full bg-white fixed top-5 right-5 z-[9999] cursor-pointer transition-opacity duration-500 ${
          showButton ? "opacity-100" : "opacity-0 pointer-events-none"
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
            className={`bg-custom-black block transition-all duration-500 ease-out 
              h-0.5 w-6 rounded-sm ${
                navActive ? "rotate-45 translate-y-1" : "-translate-y-0.5"
              }`}
          ></span>
          <span
            className={`bg-custom-black block transition-all duration-500 ease-out 
              h-0.5 w-6 rounded-sm my-0.5 ${
                navActive ? "opacity-0" : "opacity-100"
              }`}
          ></span>
          <span
            className={`bg-custom-black block transition-all duration-500 ease-out 
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
