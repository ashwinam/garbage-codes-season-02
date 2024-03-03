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

  const handleSelectedFruit = (fruit: string) => console.log(fruit);

  return (
    <div>
      <ListGroup
        fruits={fruits}
        heading={"List Of Fruits"}
        onSelectFruit={handleSelectedFruit}
      />
    </div>
  );
}

export default App;
