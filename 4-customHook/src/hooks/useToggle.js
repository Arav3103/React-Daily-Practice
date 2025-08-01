import { useState } from "react";

const useToggle = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const handleToggle = () => {
    setValue((prevValue) => !prevValue);
  };

  return {
    value: value,
    handleToggle: handleToggle,
  };
};

export default useToggle;
