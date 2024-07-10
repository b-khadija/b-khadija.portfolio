import React from "react";
import { motion, useAnimation } from "framer-motion";

const AnimatedLogo = () => {
  const controls = useAnimation();

  const startAnimation = () => {
    controls.start({
      rotate: [0, 360, 0],
      transition: { duration: 2, repeat: Infinity },
    });
  };

  const stopAnimation = () => {
    controls.stop();
  };

  return (
    <div>
      <motion.div
        onMouseEnter={startAnimation}
        onMouseLeave={stopAnimation}
        style={{ display: "inline-block" }}
      >
        <motion.span
          animate={controls}
          initial={{ rotate: 0 }}
          style={{
            fontSize: "3rem",
            display: "inline-block",
            originX: 0.5, 
            originY: 0.5, 
          }}
        >
          K
        </motion.span>
        <motion.span
          animate={controls}
          initial={{ rotate: 0 }}
          style={{
            fontSize: "3rem",
            display: "inline-block",
            originX: 0.5, 
            originY: 0.5, 
          }}
        >
          B
        </motion.span>
      </motion.div>
    </div>
  );
};

export default AnimatedLogo;
