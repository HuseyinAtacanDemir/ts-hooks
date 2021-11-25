import React, { ReactNode, useContext, useState } from "react";

import UserContext, { UserContextInterface } from "./../context/store";

interface Props {
  children?: ReactNode;
}

const UseContextComponent = (props: Props) => {
  const { user, setUser } = useContext<UserContextInterface>(UserContext);
  const [firstName, setFirstName] = useState<string>(user.first);
  const [lastName, setLastName] = useState<string>(user.last);

  const handleFirst = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setFirstName(e.target.value);
  const handleLast = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setLastName(e.target.value);
  return (
    <div className="use-context-component">
      <div className="user-info">First: {user.first}</div>
      <input type="text" value={firstName} onChange={(e) => handleFirst(e)} />
      <div className="user-info">Last: {user.last}</div>
      <input type="text" value={lastName} onChange={(e) => handleLast(e)} />
      <button onClick={() => setUser({ first: firstName, last: lastName })}>
        Update User Context
      </button>
    </div>
  );
};

export default UseContextComponent;
