function ListGroup() {
  const fruits = [
    "Banana",
    "Pineapple",
    "Pomegranate",
    "Apple",
    "Orange",
    "Grapes",
  ];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {/* Here react ask for key attribute to track of whats going on here, or for good implementatio for dom */}
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
