import React from "react";
import CustomCursor from "./CustomCursor";

const About = () => {
  return (
    <div className="container mx-auto py-8 flex flex-col items-center cursor-none">
      <CustomCursor />
      <h1 className="text-3xl font-bold mb-8 font-RobotoSlab text-white tracking-widest">
        À propos
      </h1>
      <p className="text-xl text-white w-full max-w-4xl tracking-widest text-justify mt-12 px-12">
        Hey, je suis <strong>Khadija Bayssir</strong>,<br />
        Je suis développeuse Full-Stack, spécialisée en accessibilité numérique
        (A11Y). Passionnée par le développement front-end et back-end, j'aime
        concevoir des interfaces utilisateur intuitives et accessibles. Toujours
        curieuse et avide de nouvelles connaissances, j'aime explorer les
        nouvelles technologies.
      </p>
    </div>
  );
};

export default About;
