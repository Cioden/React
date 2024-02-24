//import { Fragment } from "react";
//import { MouseEvent } from "react";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  //items = [];
  //let selectedIndex = 0;
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //arr[0]; //variable (selectedIndex)
  //arr[1]; //updater function
  //const [name, setName] = useState("");

  /*if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No item found</p>
      </>
    );*/

  //const message = items.length === 0 ? <p>No item found</p> : null;

  /*const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };*/

  //Event handler
  //const handleClick = (event: MouseEvent) => console.log(event);

  return (
    //<Fragment>
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
    //</Fragment>
  );
}

export default ListGroup;
