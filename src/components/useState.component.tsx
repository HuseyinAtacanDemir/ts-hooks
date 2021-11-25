import React, { useState } from "react";

interface Props {}

const UseStateComponent = (props: Props) => {
  const [arr, setArr] = useState<number[]>([]);
  const [name, setName] = useState<string | null>(null);
  const [input, setInput] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setInput(e.target.value);

  return (
    <div className="use-state-component-container">
      <div className="use-state-component">
        <button
          className="button-primary"
          onClick={() => setArr([...arr, arr.length + 1])}
        >
          Add to Arr
        </button>
        {JSON.stringify(arr)}
      </div>
      <div className="use-state-component">
        <input value={input} onChange={(e) => handleChange(e)} />
        <button className="button-primary" onClick={() => setName(input)}>
          Set Name
        </button>
        {JSON.stringify(name)}
      </div>
    </div>
  );
};

export default UseStateComponent;
