import React, { useRef } from "react";
import Grandchild from "./Grandchild";

const Child = React.memo(function ({ handleClick }) {
  const count = useRef(0);
  count.current += 1;
  return (
    <>
      <button onClick={handleClick}>Click me!!</button>
      <p>Child component rendered {count.current} times</p>
      <Grandchild input={count.current} />
    </>
  );
});

export default Child;
