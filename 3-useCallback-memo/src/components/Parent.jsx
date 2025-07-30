import React, { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [flag, setFlag] = useState(false);
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setFlag((prevValue) => !prevValue);
  }, []);
  const updateCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <p>Value is {flag ? "True" : "False"}</p>
      <button onClick={updateCount}>Update Count</button>
      <p>Count is {count}</p>
      <Child handleClick={handleClick} />
    </>
  );
};

export default Parent;
