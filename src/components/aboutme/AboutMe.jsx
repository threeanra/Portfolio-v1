import Photo from "../../assets/Photo-testing.jpeg";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Helper function to split text into individual characters
const splitText = (text) => {
  return text.split("").map((char, index) => (
    <motion.span key={index} variants={characterAnimation}>
      {char}
    </motion.span>
  ));
};

// Animation for each character
const characterAnimation = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

// Staggered animation for the container
const containerAnimation = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

// Opacity animation for paragraphs
const opacityAnimation = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

function AboutMe() {
  const aboutMe = useRef(null);
  const desc = useRef(null);
  const descAbout = useRef(null);
  const isAboutMeInView = useInView(aboutMe);
  const isDescAboutInView = useInView(descAbout);
  const isDescInView = useInView(desc);

  return (
    <section id="about" className="w-full pt-40 bg-background-color lg:pb-36">
      <div className="container mx-auto px-7 lg:px-0">
        <div className="grid grid-cols-12 md:gap-20">
          <div className="col-span-full lg:col-span-6"></div>
          <div className="col-span-full lg:col-span-6 md:flex flex-col m-0">
            <motion.div
              ref={aboutMe}
              className="overflow-hidden lg:h-20"
              variants={containerAnimation}
              initial="initial"
              animate={isAboutMeInView ? "animate" : "initial"}
            >
              <motion.p className="text-5xl md:text-[95px] 2xl:text-8xl md:mb-5 text-start font-montreal-medium text-black">
                {splitText("A brief intro,")}
              </motion.p>
            </motion.div>
            <motion.div
              className="overflow-hidden lg:h-20"
              variants={containerAnimation}
              initial="initial"
              animate={isAboutMeInView ? "animate" : "initial"}
            >
              <motion.p className="text-5xl md:text-[95px] 2xl:text-8xl md:mb-5 text-start font-montreal-medium text-black">
                {splitText("who am I?")}
              </motion.p>
            </motion.div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5 md:gap-20 md:mt-10">
          <div className="col-span-full md:col-span-4 md:flex flex-col md:self-end">
            <img
              src={Photo}
              alt="Photo"
              className="md:w-auto h-auto md:h-[17rem] md:w-[30rem] xl:h-[25rem] 2xl:h-[32rem] object-cover rounded-lg my-5 md:my-0"
            />
          </div>
          <div className="col-span-full md:col-span-5 lg:col-span-8 2xl:pr-[50px]">
            <motion.p
              ref={desc}
              variants={opacityAnimation}
              initial="initial"
              animate={isDescInView ? "open" : "initial"}
              className="text-lg lg:text-2xl 2xl:text-3xl leading-normal font-montreal-regular text-black tracking-regular"
            >
              {`7th semester Informatics Engineering student who is pursuing a
              bachelor's degree at Indraprastra PGRI University. Who is very
              enthusiastic about technology, has experience in Android using
              Kotlin programming language and Android architecture, and has
              skills in developing web applications.`}
            </motion.p>
            <div className="mt-10 flex flex-col lg:flex-row md:gap-30 xl:pr-10 2xl:pr-12">
              <motion.p
                ref={descAbout}
                variants={opacityAnimation}
                initial="initial"
                animate={isDescAboutInView ? "open" : "initial"}
                className="text-black font-montreal-regular w-full mb-5 md:mb-0"
              >
                ABOUT ME
              </motion.p>
              <motion.p
                ref={descAbout}
                variants={opacityAnimation}
                initial="initial"
                animate={isDescAboutInView ? "open" : "initial"}
                className="text-black font-montreal-regular text-lg"
              >
                I am a person who really likes simple and clean design, with
                very small details that are considered as much as possible, in
                order to realize the comfort of each other. I am happy to learn
                about new things and have good analytical skills to adapt to the
                surrounding environment quickly.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
