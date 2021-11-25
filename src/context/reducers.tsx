import React from "react";

export const initialState = {
  counter: 100,
};

export type ACTION_TYPES =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

export const counterReducer = (
  state: typeof initialState,
  action: ACTION_TYPES
) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
