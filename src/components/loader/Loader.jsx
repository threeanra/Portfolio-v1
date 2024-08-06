import { useEffect } from "react";
import "../../index.css";
import { motion } from "framer-motion";

const greetings = [
  { text: "Hello", delay: 1.4 },
  { text: "Hola", delay: 1.7 },
  { text: "Bounjour", delay: 2.0 },
  { text: "مرحباً", delay: 2.3 },
  { text: "你好", delay: 2.7 },
  { text: "안녕하세요", delay: 3 },
];

const LoaderHome = () => {
  useEffect(() => {
    // Add 'no-scroll' class to body to disable scrolling
    document.body.classList.add("no-scroll");

    // Remove 'no-scroll' class after animation is done
    const timer = setTimeout(() => {
      document.body.classList.remove("no-scroll");
    }, 3500); // 3.5 seconds + 1 second buffer for the animation

    // Cleanup timeout if component unmounts before the timer ends
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      initial={{ y: 0 }}
      animate={{
        y: "-100vh",
        transition: {
          duration: 1.3,
          delay: 3.5,
          ease: [0.25, 1, 0.5, 1],
        },
      }}
      exit={{ y: window.innerWidth }}
      className="fixed w-screen h-screen z-40 overflow-hidden"
    >
      <div className="w-full h-screen flex flex-col justify-center items-center leading-[0] text-3xl bg-custom-gray text-white overflow-hidden">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.2,
              duration: 1.2,
            },
            transitionEnd: { display: "none" },
          }}
          className="loaderText font-montreal-regular"
        >
          Halo
        </motion.span>
        {greetings.map((greet, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: greet.delay,
              },
              transitionEnd: greet.delay !== 3 ? { display: "none" } : {},
            }}
            className="loaderText font-montreal-regular"
          >
            {greet.text}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
};

export default LoaderHome;
