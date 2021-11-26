import React, { ReactElement, ReactNode } from "react";

interface EvenMoreReactInterface {
  children?: ReactNode;
}

export interface HeaderInterface {
  title: string;
}

export const Header: React.FC<HeaderInterface> = ({ title }) => {
  return <div>{title}</div>;
};

export type ListComponent = <ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) => ReactElement;

export const List: ListComponent = ({ items, render }) => {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{render(item)}</li>
        ))}
      </ul>
    </div>
  );
};

const EvenMoreReact: React.FC<EvenMoreReactInterface> = (props) => {
  return (
    <div>
      <Header title={"My Header"} />
      <List items={["a", "b", "c"]} render={(str) => <strong>{str}</strong>} />
    </div>
  );
};

export default EvenMoreReact;
