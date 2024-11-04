import React from "react";
import { useState, useEffect } from "react";

const Sixth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const windowSize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", windowSize);

    return () => {
      window.removeEventListener("resize", windowSize);
    };
  }, []);

  return (
    <div>
      <h1>Ширина вікна {windowWidth} px</h1>
    </div>
  );
};

export default Sixth;
