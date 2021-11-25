import { createContext, Dispatch, SetStateAction } from "react";

export interface UserInterface {
  first: string;
  last: string;
}
export interface UserContextInterface {
  user: UserInterface;
  setUser: Dispatch<SetStateAction<UserInterface>> | (() => void);
}

const initialState: UserContextInterface = {
  user: {
    first: "Atacan",
    last: "Demir",
  },
  setUser: () => {},
};

const userContext = createContext<UserContextInterface>(initialState);

export default userContext;
