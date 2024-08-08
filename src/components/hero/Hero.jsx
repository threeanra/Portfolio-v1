import Navbar from "../Element/navbar/Navbar";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";

function Hero() {
  const slider = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const [isMdOrLarger, setIsMdOrLarger] = useState(false);

  useEffect(() => {
    // Function to update state based on screen width
    const updateSize = () => {
      setIsMdOrLarger(window.matchMedia("(min-width: 768px)").matches);
    };

    // Add event listener
    window.addEventListener("resize", updateSize);

    // Initial check
    updateSize();

    // Cleanup event listener
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  let xPercent = 0;

  useEffect(() => {
    gsap.set(secondText.current, {
      left: secondText.current.getBoundingClientRect().width,
    });

    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent });

    gsap.set(secondText.current, { xPercent: xPercent });

    requestAnimationFrame(animate);

    xPercent += 0.1;
  };

  return (
    <>
      <Navbar />
      <section className="bg-background-color overflow-hidden relative">
        <div className="container px-7 lg:px-0 w-full h-screen flex flex-col justify-center mx-auto overflow-hidden">
          <div className="grid grid-cols-12 md:gap-12 lg:gap-0 overflow-hidden">
            <motion.div
              initial={{ y: 100 }}
              animate={{
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 3.6,
                },
              }}
              className="flex flex-col gap-5 justify-between overflow-hidden order-2 md:order-1 col-span-12 md:col-span-5 lg:col-span-3 mt-10 md:mt-0 text-lg font-montreal-regular w-2/3 md:w-full lg:w-[190px]"
            >
              <p>
                Based in <br /> Jakarta, Indonesia
              </p>
              <div className="w-full border-b-2 border-black mt-4 md:mt-0 transition-all duration-300 group hover:border-transparent">
                <a href="#" className="flex items-center justify-between group">
                  <span>Resume</span>
                  <span className="ml-2 text-3xl transition-all duration-300 transform group-hover:rotate-180">
                    →
                  </span>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 100 }}
              animate={{
                y: 0,
                transition: {
                  duration: 0.6,
                  delay: 3.6,
                },
              }}
              className="overflow-hidden col-span-12 md:col-span-10 md:col-start-4 order-1 md:order-2 lg:col-start-5 text-xl md:text-3xl 2xl:text-4xl font-montreal-medium mt-40 md:mt-0 tracking-normal"
            >
              Hey! I'm <b>Trian</b>, and I'm thrilled to have you here. This
              space is a reflection of my passions, projects, and the journey
              I'm on.
            </motion.div>
          </div>
        </div>
        <div
          className={`absolute ${
            isMdOrLarger ? "bottom-10" : "top-[80px]"
          } overflow-hidden lg:mb-[-30px] pt-7`}
        >
          <motion.div
            initial={{ y: 300 }}
            animate={{
              y: 0,
              transition: {
                duration: 0.6,
                ease: [0.33, 1, 0.68, 1],
                delay: 3.6,
              },
            }}
            ref={slider}
            className="relative whitespace-nowrap flex overflow-hidden h-full"
          >
            <p
              ref={firstText}
              className="relative text-9xl overflow-hidden pt-[50px] lg:text-[220px] pr-[50px] font-montreal-medium tracking-tighter"
            >
              Android & Website Developer -
            </p>
            <p
              ref={secondText}
              className="text-9xl lg:text-[220px] pt-[50px] pr-[50px] font-montreal-medium tracking-tighter"
            >
              Android & Website Developer -
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Hero;
