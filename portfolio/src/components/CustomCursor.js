import React, { useEffect, useRef } from "react";
import "../assets/style/CustomCursor.css";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const dot = dotRef.current;
      const outline = outlineRef.current;
      if (dot && outline) {
        dot.style.top = `${e.clientY}px`;
        dot.style.left = `${e.clientX}px`;
        outline.style.top = `${e.clientY}px`;
        outline.style.left = `${e.clientX}px`;
      }
    };

    document.body.addEventListener("mousemove", handleMouseMove);

    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (dot && outline) {
      dot.style.opacity = 1;
      outline.style.opacity = 1;
    }

    const menuButton = document.getElementById("menu-button");
    const handleMenuClick = () => {
      if (dot && outline) {
        dot.style.opacity = 1;
        outline.style.opacity = 1;
      }
    };

    if (menuButton) {
      menuButton.addEventListener("click", handleMenuClick);
    }

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
      if (menuButton) {
        menuButton.removeEventListener("click", handleMenuClick);
      }
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={outlineRef} className="cursor-dot-outline"></div>
    </>
  );
};

export default CustomCursor;
