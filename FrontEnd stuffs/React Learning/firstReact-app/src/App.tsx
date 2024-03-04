import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import { useState } from "react";
import { IoIosCalendar } from "react-icons/io";

function App() {
  let fruits = [
    "Banana",
    "Pineapple",
    "Pomegranate",
    "Apple",
    "Orange",
    "Grapes",
  ];

  const [showAlert, setShowAlert] = useState(false);

  const handleSelectedFruit = (fruit: string) => console.log(fruit);

  const handleAlertComponent = () => setShowAlert(true);

  const handleAlertComponentOnClose = () => setShowAlert(false);

  return (
    <div>
      {/* <ListGroup
        fruits={fruits}
        heading={"List Of Fruits"}
        onSelectFruit={handleSelectedFruit}
      /> */}
      <IoIosCalendar color="red" />
      {showAlert && (
        <Alert onCloseClick={handleAlertComponentOnClose}>I am clicked</Alert>
      )}

      <Button
        btnName="Dislike"
        btnColor="danger"
        onAlertPost={handleAlertComponent}
      />
      <Like onClick={() => console.log("Clicked")} />
    </div>
  );
}

export default App;
