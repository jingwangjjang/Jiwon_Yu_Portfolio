import "./hero.scss";
import { motion } from "framer-motion";
import TypeIt from "typeit-react";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-650%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 40,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>JIWON YU</motion.h2>
          <TypeIt
            as={"h1"}
            options={{
              speed: 100,
              waitUntilVisible: true,
              loop: true,
            }}
            getBeforeInit={(instance) => {
              instance
                .pause(500)
                .type("Passionate")
                .pause(500)
                .delete(10)
                .type("Collaborative")
                .pause(500)
                .delete(13)
                .type("Innovative")
                .pause(500)
                .delete(10)
                .type("Frontend")
                .pause(1000);

              return instance;
            }}
          />
          <motion.h1 variants={textVariants}>Developer</motion.h1>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Welcome! 어서오세요! Bienvenido!
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
