import React, { ReactNode, useState } from "react";

import UserContext, { UserInterface } from "./store";

interface Props {
  children?: ReactNode;
}

const UseContextProvider = (props: Props) => {
  const [user, setUser] = useState<UserInterface>({
    first: "Tolga",
    last: "Demir",
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UseContextProvider;
