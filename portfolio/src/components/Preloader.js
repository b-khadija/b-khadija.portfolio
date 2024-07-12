import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import PreloaderAnim from "../assets/animation/PreloaderAnim.json";
import "../assets/style/PreloaderText.css";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="flex flex-col items-center fixed top-0 left-0 w-full h-full justify-center bg-white z-50">
      <Lottie
        animationData={PreloaderAnim}
        loop
        autoplay
        className="w-auto	h-auto"
      />
      <div className="preloader container text-center flex items-center justify-center">
        <h1 className="sm:text-3xl title-mobile-style">
          System
          <span style={{ color: "purple" }}>
            .<span style={{ color: "#e06c75" }}>out</span>.
          </span>
          <span className="title-mobile-style" style={{ color: "#61afef" }}>
            println
          </span>
          ("
        </h1>
        <div className="string-wrapper">
          <div className="string">
            <p className="greeting en sm:text-2xl">Hello World!</p>
            <p className="greeting fr text-base sm:text-2xl">Bonjour!</p>
            <p className="greeting es text-base sm:text-2xl">¡Hola Mundo!</p>
            <p className="greeting it text-base sm:text-2xl">Ciao Mondo!</p>
            <p className="greeting de text-base sm:text-2xl">Hallo Welt!</p>
          </div>
        </div>
        <h1 className="closure text-3xl title-mobile-style">");</h1>
      </div>
    </div>
  );
};

export default Preloader;
