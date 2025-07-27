import React, { useMemo, useRef, useState } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount((prev) => prev + 1);
  const tempText = "Katak";
  const userID = useMemo(() => {
    //console.log("User ID computed");
    return 2 * 2 + "Arav" + tempText;
  }, [tempText]);

  const color = useMemo(() => {
    //console.log("Color Variable computed");
    return mode === "light" ? "#000" : "#fff";
  }, [mode]);

  const toggleMode = () => {
    //console.log("toggle mode");
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const newObj = useMemo(() => ({ mode: mode, userID: userID }), [mode, userID]);
  const contextObject = { newObj, color, toggleMode, userID };

  //Object reference tracking
  const objRef = useRef();
  console.log(
    "Object reference",
    objRef.current,
    newObj,
    objRef.current === newObj
      ? "🟢 Same context object reference"
      : "🔴 New context object reference"
  );

  objRef.current = newObj;

  return (
    <ThemeContext.Provider value={contextObject}>
      <p>{`Count is ${count}`}</p>
      <button onClick={handleIncrement}>Increment</button>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
