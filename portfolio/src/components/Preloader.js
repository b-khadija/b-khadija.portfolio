import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import PreloaderAnim from "../assets/animation/PreloaderAnim.json";
import "../assets/style/PreloaderText.css";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="preloader inset-0 max-h-screen fixed flex items-center flex-col justify-center bg-white z-50">
      <Lottie
        animationData={PreloaderAnim}
        loop
        autoplay
        className="w-auto h-auto"
      />
      <div className="text-wrapper">
        <h1 className="text-out">
          System
          <span style={{ color: "purple" }}>
            .<span style={{ color: "#e06c75" }}>out</span>.
          </span>
          <span style={{ color: "#61afef" }}>println</span>
          ("
        </h1>
        <div className="string-wrapper">
          <div className="string flex flex-col items-center">
            <p className="text-orange-600 text-size">Hello World!</p>
            <p className="text-yellow-600 text-size">Bonjour!</p>
            <p className="text-red-600 text-size">¡Hola Mundo!</p>
            <p className="text-purple-600 text-size">Hallo Welt!</p>
            <p className="text-blue-600 text-size">Ciao Mondo!</p>
          </div>
        </div>
        <h1 className="text-out">");</h1>
      </div>
    </div>
  );
};

export default Preloader;
