import React from "react";
import useToggle from "../hooks/useToggle";

const Container = () => {
  const { value, handleToggle } = useToggle(false);
  return (
    <section className={value ? "dark" : "light"}>
      <h2>My theme is : {value ? "DARK" : "LIGHT"}</h2>
      <button onClick={handleToggle}>Change Theme</button>
    </section>
  );
};

export default Container;
