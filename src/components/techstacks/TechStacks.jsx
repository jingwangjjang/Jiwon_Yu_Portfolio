import { useRef } from "react";
import "./techstacks.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const transition = {
  type: "spring",
  damping: 10,
  mass: 2,
  stiffness: 100,
};

const images1 = [
  "react",
  "js",
  "css3",
  "html5",
  "recoil",
  "sass",
  "tailwindcss",
  "vitejs",
  "python",
  "github",
  "vscode",
];
const images2 = [
  "nextjs",
  "ts",
  "mysql",
  "firebase",
  "styledcomponents",
  "postman",
  "npm",
];
const images3 = ["redux", "webpack", "babel", "mongodb", "figma"];

const TechStacks = () => {
  const ref = useRef();

  return (
    <motion.div
      className="techstacks"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I don't stop learning
          <br /> new Frameworks and Libraries!
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            My <b className="animate-charcter">Tech Stacks</b>
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.fieldset className="box">
          <legend>I know how it works 😎</legend>
          {images1.map((logo, index) => (
            <motion.img
              key={index}
              src={`/${logo}.png`}
              alt={logo}
              whileHover={{ rotate: 360 }}
              transition={transition}
            />
          ))}
        </motion.fieldset>
        <motion.fieldset className="box">
          <legend>I know pretty well 🧐</legend>
          {images2.map((logo, index) => (
            <motion.img
              key={index}
              src={`/${logo}.png`}
              alt={logo}
              whileHover={{ rotate: 360 }}
              transition={transition}
            />
          ))}
        </motion.fieldset>
        <motion.fieldset className="box">
          <legend>I know basics 👨‍💻</legend>
          {images3.map((logo, index) => (
            <motion.img
              key={index}
              src={`/${logo}.png`}
              alt={logo}
              whileHover={{ rotate: 360 }}
              transition={transition}
            />
          ))}
        </motion.fieldset>
      </motion.div>
    </motion.div>
  );
};

export default TechStacks;
