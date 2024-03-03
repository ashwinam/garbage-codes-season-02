import { Fragment } from "react/jsx-runtime";
import { MouseEvent, useState } from "react";

function ListGroup() {
  let fruits = [
    "Banana",
    "Pineapple",
    "Pomegranate",
    "Apple",
    "Orange",
    "Grapes",
  ];

  // let selectedIndex = 0;

  // useState hook

  let [selectedIndex, setSelectedIndex] = useState(-1);

  // In tyescript we have to provide a type annotation, In react we have MouseEvent using `:`
  // Event handling
  const handleClick = (event: MouseEvent) => console.log(event);

  // for clean code purpose always use functions for bigger conditions

  return (
    // fragments syntax
    <>
      <h1>List</h1>
      <ul className="list-group">
        {/* Here react ask for key attribute to track of whats going on here, or for good implementatio of dom */}
        {fruits.length === 0 && <p>No Fruits Available</p>}
        {fruits.map((fruit, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={fruit}
            onClick={() => setSelectedIndex((selectedIndex = index))} // here we pass reference
          >
            {fruit}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
