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

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

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

  const handleSetGame = () =>
    setGame({ ...game, player: { ...game.player, name: "rahul" } });

  const handlePizza = () =>
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, "Tomato", "Mozzarela"],
    });

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
      {/* Exercise 01 */}
      <h4>Game Set</h4>
      <p>{game.player.name}</p>
      <button onClick={handleSetGame}>changeName</button>

      {/* Exercise 02 */}

      <h4>Pizzawale</h4>
      <p>Name: {pizza.name}</p>
      <p>
        Toppings:{" "}
        {pizza.toppings.map((topping) => (
          <li key={topping}>{topping}</li>
        ))}
      </p>
      <button onClick={handlePizza}>Add toppings</button>
    </div>
  );
}

export default App;
