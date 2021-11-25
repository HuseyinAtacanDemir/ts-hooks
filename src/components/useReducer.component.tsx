import React, { ReactNode, useReducer } from "react";
import { counterReducer, initialState } from "../context/reducers";

interface Props {
  children?: ReactNode;
}

const UseReducerComponent = (props: Props) => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <div>{state.counter}</div>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "increment",
              payload: 10,
            })
          }
        >
          Increment
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            dispatch({
              type: "decrement",
              payload: 10,
            })
          }
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default UseReducerComponent;
