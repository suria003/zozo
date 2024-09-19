import React, { useState, useEffect } from "react";
import IMG from "../Assets/back.jpg";
import "./App.css";

const ImageZoom = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    setScrollY(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const zoomScale = 1 + scrollY / 500;

  return (
    <div className="scroll-container">
      <div className="image-container" style={{ transform: `scale(${zoomScale})` }}>
        <img src={IMG} alt="Zoomable" className="image" />
      </div>
    </div>
  );
};

export default ImageZoom;
