import React, { ReactNode, useMemo } from "react";
import { UserInterface } from "../context/store";
import useFetchData from "../hooks/useFetchData";

interface Props {
  children?: ReactNode;
}

const CustomHookComponent = (props: Props) => {
  const { data, done, error } = useFetchData<UserInterface[]>("/users.json");

  const longFirstNames = useMemo(
    () => (data || []).filter((user) => user.first.length > 10),
    [data]
  );
  const longLastNames = useMemo(
    () => (data || []).filter((user) => user.last.length > 10),
    [data]
  );

  return (
    <div>
      {done ? (
        <div>
          <h2>Users</h2>
          {data!.map((user, idx) => (
            <div>
              <h3>User ID: {idx}</h3>
              <div>{user.first}</div>
              <div>{user.last}</div>
            </div>
          ))}
          <h2>Long First Names</h2>
          {longFirstNames!.map((user) => (
            <div>
              <h3>User:</h3>
              <div>{user.first}</div>
              <div>{user.last}</div>
            </div>
          ))}
          <h2>Long Last Names</h2>
          {longLastNames!.map((user) => (
            <div>
              <h3>User:</h3>
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
