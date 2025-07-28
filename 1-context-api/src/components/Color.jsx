import React, { useContext, useRef } from "react";
import ThemeContext from "../context/ThemeContext";

const Color = () => {
  const { color } = useContext(ThemeContext);
  const count = useRef(0);
  count.current += 1;
  //console.log("Color Component Rendered", `Count - ${count.current}`, color);

  return (
    <>
      <h1 style={{ color: color }}>This is my color</h1>
    </>
  );
};

export default Color;
