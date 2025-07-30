import React, { useMemo } from "react";

const Grandchild = ({ input }) => {
  const computedValue = useMemo(() => {
    let a = 2;
    console.log("Value Calculated");

    for (let i = 0; i < input; i++) {
      a = a + i;
    }
    return a;
  }, [input]);
  return (
    <>
      <p>From Grand Child{computedValue}</p>
    </>
  );
};

export default Grandchild;
