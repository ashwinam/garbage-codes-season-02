function ListGroup() {
  let fruits = [
    "Banana",
    "Pineapple",
    "Pomegranate",
    "Apple",
    "Orange",
    "Grapes",
  ];

  fruits = [];

  // for clean code purpose always use functions for bigger conditions

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {/* Here react ask for key attribute to track of whats going on here, or for good implementatio of dom */}
        {fruits.length === 0 && <p>No Fruits Available</p>}
        {fruits.map((fruit) => (
          <li className="list-group-item" key={fruit}>
            {fruit}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
