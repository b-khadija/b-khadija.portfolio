import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import PreloaderAnim from "../assets/animation/PreloaderAnim.json";
import "../assets/style/PreloaderText.css";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // }, 3000); /
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
      <div className="preloader text-center flex items-center justify-center">
        <h1 className="text-3xl">
          System
          <span style={{ color: "white" }}>
            .<span style={{ color: "#e06c75" }}>out</span>.
          </span>
          <span style={{ color: "#61afef" }}>println</span>("
        </h1>
        <div className="string-wrapper">
          <div className="string">
            <p className="greeting en text-2xl">Hello World!</p>
            <p className="greeting fr text-2xl">Bonjour!</p>
            <p className="greeting es text-2xl">¡Hola Mundo!</p>
            <p className="greeting it text-2xl">Ciao Mondo!</p>
            <p className="greeting de text-2xl">Hallo Welt!</p>
          </div>
        </div>
        <h1 className="closure text-3xl">");</h1>
      </div>
    </div>
  );
};

export default Preloader;
