import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

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

  const handleAlert = () => alert("I am clicked");
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

      <Button btnName="Dislike" btnColor="danger" onAlertPost={handleAlert} />
    </div>
  );
}

export default App;
