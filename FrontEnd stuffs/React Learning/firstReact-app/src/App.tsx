import ListGroup from "./components/ListGroup";

function App() {
  let fruits = [
    "Banana",
    "Pineapple",
    "Pomegranate",
    "Apple",
    "Orange",
    "Grapes",
  ];

  return (
    <div>
      <ListGroup fruits={fruits} heading={"List Of Fruits"} />
    </div>
  );
}

export default App;
