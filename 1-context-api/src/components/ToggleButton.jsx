import React, { useContext, useRef } from "react";
import ThemeContext from "../context/ThemeContext";

const ToggleButton = () => {
  const { toggleMode } = useContext(ThemeContext);
  const count = useRef(0);
  count.current += 1;
  //console.log("Toggle Button Component Rendered", `Count - ${count.current}`);

  return (
    <>
      <button onClick={toggleMode}>Toggle</button>
    </>
  );
};

export default ToggleButton;
