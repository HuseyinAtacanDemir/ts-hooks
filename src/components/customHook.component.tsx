import React, { ReactNode } from "react";
import { UserInterface } from "../context/store";
import useFetchData from "../hooks/useFetchData";

interface Props {
  children?: ReactNode;
}

const CustomHookComponent = (props: Props) => {
  const { data, done, error } = useFetchData<UserInterface[]>("/users.json");

  return (
    <div>
      {done ? (
        <div>
          {data!.map((user, idx) => (
            <div>
                <h3>User ID: {idx}</h3>
              <div>{user.first}</div>
              <div>{user.last}</div>
            </div>
          ))}
        </div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default CustomHookComponent;
