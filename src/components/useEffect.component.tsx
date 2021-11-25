import React, { useState, useEffect } from "react";

interface Props {}

const UseEffectComponent = (props: Props) => {
  const [value, setValue] = useState<number>(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setValue((v) => v + 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return <div>{value}</div>;
};

export default UseEffectComponent;
