import React, { ReactNode, useRef } from "react";

interface Props {
  children?: ReactNode;
}

const UseRefComponent = (props: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default UseRefComponent;
