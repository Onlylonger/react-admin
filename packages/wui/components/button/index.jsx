import React, { useState, useEffect } from "react";

const WButton = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((preCount) => preCount + 1);
    }, 1000);
  }, []);
  return <button>button-Exampleeeewww - {count}</button>;
};

export default WButton;
