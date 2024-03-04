import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { useState } from "react";
import { IoIosCalendar } from "react-icons/io";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [products, setProduct] = useState(["product1", "product2"]);

  let fruits = [
    "Banana",
    "Pineapple",
    "Pomegranate",
    "Apple",
    "Orange",
    "Grapes",
  ];

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
      {/* <IoIosCalendar color="red" />
      {showAlert && (
        <Alert onCloseClick={handleAlertComponentOnClose}>I am clicked</Alert>
      )}

      <Button
        btnName="Dislike"
        btnColor="danger"
        onAlertPost={handleAlertComponent}
      />
      <Like onClick={() => console.log("Clicked")} /> */}
      <Navbar cartItemCount={products.length} />
      <Cart cartItems={products} onClear={() => setProduct([])} />
    </div>
  );
}

export default App;
