import Navbar from "../Element/navbar/Navbar";
import { easeInOut, motion } from "framer-motion";

// Variants
const MotionTitle = ({ children, delay }) => (
  <motion.h1
    initial={{ y: "100%" }}
    animate={{
      y: 0,
      transition: {
        duration: 1,
        delay,
        ease: easeInOut,
      },
    }}
    className="md:text-7xl 2xl:text-8xl font-montreal-regular"
  >
    {children}
  </motion.h1>
);

function Hero() {
  const title = ["Android and Web Developer", "Based in Jakarta, Indonesia"];
  return (
    <>
      <Navbar />
      <div className="container px-7 lg:px-0 w-full h-screen flex flex-col justify-center mx-auto text-start text-3xl \">
        <div className="overflow-hidden mt-28">
          <MotionTitle delay={3.6}>
            <b className="font-montreal-bold">Trian</b>, is an
          </MotionTitle>
        </div>
        {title.map((title, index) => (
          <div className="overflow-hidden" key={index}>
            <MotionTitle delay={3.6}>{title}</MotionTitle>
          </div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              ease: easeInOut,
              duration: 1,
              delay: 3.8,
            },
          }}
          className="hero-scroll flex items-center mt-24"
        >
          <a href="#about" className="scroll_button">
            <svg
              width="32px"
              height="32px"
              className="home__scroll-mouse"
              viewBox="0 0 247 390"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: "1.5",
              }}
            >
              <path
                className="wheel"
                d="M123.359,79.775l0,72.843"
                style={{ fill: "none", stroke: "black", strokeWidth: "20px" }}
              ></path>
              <path
                id="mouse"
                d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                style={{ fill: "none", stroke: "black", strokeWidth: "20px" }}
              ></path>
            </svg>
          </a>
          <span className="text-lg ml-2 font-montreal-regular mt-2">
            Scroll Down
          </span>
        </motion.div>
      </div>
    </>
  );
}

export default Hero;
