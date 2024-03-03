import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

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
      {/* <ListGroup
        fruits={fruits}
        heading={"List Of Fruits"}
        onSelectFruit={handleSelectedFruit}
      /> */}
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  );
}

export default App;
