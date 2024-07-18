import React from "react";

const About = () => {
  return (
    <div className="container mx-auto py-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 font-RobotoSlab text-Black tracking-widest uppercase">
        À propos
      </h1>
      <p className="text-xl text-RichBlack w-full max-w-4xl tracking-widest text-justify mt-12 px-12">
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
