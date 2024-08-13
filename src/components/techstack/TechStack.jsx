import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function TechStack() {
  const title = useRef(null);
  const isInView = useInView(title, { once: true });

  const slideUp = {
    initial: {
      y: "100%",
    },
    open: (i) => ({
      y: "0%",
      transition: { duration: 1.6, delay: 0.5 * i, ease: [0.22, 1, 0.36, 1] },
    }),
    closed: {
      y: "100%",
      transition: { duration: 1 },
    },
  };
  return (
    <section className="border-t-2 border-custom-gray bg-custom-black-2 overflow-hidden">
      <div className="container mx-auto px-4 md:px-0 py-20 md:py-36">
        <div className="grid grid-cols-12 md:gap-10 lg:gap-20">
          <div className="col-span-12 overflow-hidden">
            <div ref={title} className="overflow-hidden">
              <motion.div
                variants={slideUp}
                animate={isInView ? "open" : "closed"}
                className="text-6xl lg:text-[12rem] 2xl:text-[14rem] font-montreal-medium text-white leading-none"
              >
                WHAT CAN I
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                variants={slideUp}
                animate={isInView ? "open" : "closed"}
                className="text-6xl lg:text-[10.6rem] 2xl:text-[12.5rem] font-montreal-medium text-white leading-none"
              >
                DO FOR YOU?
              </motion.div>
            </div>
          </div>
          <div className="col-span-full md:col-start-5 mt-10 md:mt-0">
            <p className="text-2xl lg:text-3xl 2xl:text-4xl font-montreal-regular text-white">
              With some experience and expertise, I present something that can
              help solve your problem.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-white mt-20 md:mt-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">01</span>
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl 2xl:text-3xl font-montreal-medium">
              Android Development
            </h2>
            <p className="font-montreal-light text-xl lg:text-3xl 2xl:text-4xl">
              With the support of Kotlin as a programming language for
              developing Android applications, I can create applications with an
              attractive appearance and features that clients need.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">02</span>
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl 2xl:text-3xl font-montreal-medium">
              Website Development
            </h2>
            <p className="font-montreal-light text-xl lg:text-3xl 2xl:text-4xl">
              I create a website from scratch based on the desired design, I can
              customize the needs and features by making it with the technology
              that the client wants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
