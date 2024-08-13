import styles from "./style.module.css";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

function Description() {
  const phrase =
    "I have a passion for crafting smooth, user-friendly Android apps and dynamic websites. ";
  const description = useRef(null);
  const isInView = useInView(description, { once: true });

  const slideUp = {
    initial: {
      y: "100%",
    },
    open: (i) => ({
      y: "0%",
      transition: { duration: 0.5, delay: 0.01 * i },
    }),
    closed: {
      y: "100%",
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="bg-custom-black-2 text-white">
      <div
        className={`${styles.description} container mx-auto px-4 md:px-0 md:py-60 py-20`}
      >
        <div ref={description} className={`${styles.body}`}>
          <p>
            {phrase.split(" ").map((word, index) => {
              return (
                <span
                  key={index}
                  className={`${styles.mask} py-2 md:text-[5.2rem] 2xl:text-8xl font-montreal-medium`}
                >
                  <motion.span
                    variants={slideUp}
                    custom={index}
                    animate={isInView ? "open" : "closed"}
                    key={index}
                  >
                    {word}
                  </motion.span>
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Description;
