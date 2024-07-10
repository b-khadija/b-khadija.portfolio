import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-Black relative z-0">
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.6, ease: "easeIn", transition: 0.5 }}
        className="text-center"
      >
        <span className="font-RobotoSlab text-3xl sm:text-5xl tracking-wider uppercase font-medium">
          Hey&#8218; Je suis <br />
        </span>
        <h1 className="text-5xl sm:text-8xl font-Roash tracking-wider font-bold py-3">
          Khadija Bayssir
        </h1>
        <p className="font-RobotoSlab text-2xl sm:text-5xl font-medium tracking-wider uppercase">
          Développeuse FullStack
        </p>
        <div className="flex flex-col sm:flex-row justify-evenly pt-3 text-lg sm:text-3xl tracking-wider space-y-4 sm:space-y-0 sm:space-x-4 items-center">
          <div className="flex items-center group">
            <HiOutlineArrowRight className="transition-transform transform group-hover:rotate-45 duration-200 group-hover:text-RichBlack" />
            <Link
              to="./Project.js"
              className="cursor-none pl-2 group-hover:underline group-hover:underline-offset-4 group-hover:text-RichBlack group-hover:font-semibold"
            >
              Voir mes projets
            </Link>
          </div>
          <div className="flex items-center group">
            <HiOutlineArrowRight className="transition-transform transform group-hover:rotate-45 duration-200 group-hover:text-RichBlack " />
            <Link
              to="./About.js"
              className="cursor-none pl-2 group-hover:underline group-hover:underline-offset-4 group-hover:text-RichBlack group-hover:font-semibold"
            >
              En savoir plus
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
