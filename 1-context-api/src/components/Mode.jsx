import React, { useContext, useRef } from "react";
import ThemeContext from "../context/ThemeContext";

const Mode = () => {
  const { newObj } = useContext(ThemeContext);
  const count = useRef(0);
  count.current += 1;
  // console.log(
  //   "Mode Component Rendered",
  //   `Count - ${count.current}`,
  //   newObj.mode
  // );

  return (
    <>
      <h2>Current mode is {newObj.mode}</h2>
      <h2>User Name is {newObj.userID}</h2>
    </>
  );
};

export default Mode;
