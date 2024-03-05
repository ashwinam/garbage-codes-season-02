import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { useState } from "react";
import { IoIosCalendar } from "react-icons/io";
import ExpandableText from "./components/ExpandableText";

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

  const [myCart, setCart] = useState({
    discount: 0.1,
    productList: [
      { id: 1, title: "product1", quantity: 1 },
      { id: 2, title: "product2", quantity: 1 },
    ],
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

  const handleQuantity = () =>
    setCart({
      ...myCart,
      productList: myCart.productList.map((product) =>
        product.id === 1 ? { ...product, quantity: 2 } : product
      ),
    });

  return (
    // <div>
    //   {/* <ListGroup
    //     fruits={fruits}
    //     heading={"List Of Fruits"}
    //     onSelectFruit={handleSelectedFruit}
    //   /> */}
    //   {/* <IoIosCalendar color="red" />
    //   {showAlert && (
    //     <Alert onCloseClick={handleAlertComponentOnClose}>I am clicked</Alert>
    //   )}

    //   <Button
    //     btnName="Dislike"
    //     btnColor="danger"
    //     onAlertPost={handleAlertComponent}
    //   />
    //   <Like onClick={() => console.log("Clicked")} /> */}
    //   <Navbar cartItemCount={products.length} />
    //   <Cart cartItems={products} onClear={() => setProduct([])} />

    //   {/* Exercise 01 */}
    //   {/* <h4>Game Set</h4>
    //   <p>{game.player.name}</p>
    //   <button onClick={handleSetGame}>changeName</button> */}

    //   {/* Exercise 02 */}

    //   {/* <h4>Pizzawale</h4>
    //   <p>Name: {pizza.name}</p>
    //   <p>
    //     Toppings:{" "}
    //     {pizza.toppings.map((topping) => (
    //       <li key={topping}>{topping}</li>
    //     ))}
    //   </p>
    //   <button onClick={handlePizza}>Add toppings</button> */}

    //   {/* Exercise 03 */}

    //   <h4>My Product List and there quantity</h4>
    //   <strong>Items: </strong>
    //   {myCart.productList.map((myProduct) => (
    //     <p key={myProduct.id}>
    //       {myProduct.id} {myProduct.title} {myProduct.quantity}
    //     </p>
    //   ))}

    //   <button onClick={handleQuantity}>Change Quantity</button>
    // </div>
    <ExpandableText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tenetur
      explicabo dolor voluptatem itaque maiores quibusdam neque ipsum doloribus
      enim, in voluptate, fuga sed deserunt totam! Voluptatem corrupti numquam
      deleniti ducimus quasi libero, maxime laborum provident voluptas,
      obcaecati ullam ut ad, rerum cumque commodi aut unde architecto! Eveniet
      consectetur nam sapiente officiis ipsum enim excepturi, ullam, rerum ad
      iste dicta praesentium ut, itaque ab amet est. Numquam suscipit totam
      dignissimos ut qui illum omnis obcaecati unde, temporibus reiciendis quo
      commodi voluptate, iste itaque dicta similique ea fuga recusandae quas
      nemo. Veniam distinctio accusamus illum maiores? Quae optio dolor
      exercitationem fuga totam cumque corporis cum, veniam quisquam vel, sequi
      nulla sit quia, ducimus assumenda sapiente autem eos molestias adipisci
      eaque distinctio voluptas excepturi qui similique! Minima numquam
      temporibus dolorum facilis molestias reprehenderit, iste maxime unde
      facere, natus sequi itaque nobis a animi dolorem nesciunt nihil ex
      perferendis voluptatem totam inventore ea hic, ducimus necessitatibus.
      Laudantium soluta quasi dicta praesentium optio vitae reiciendis harum
      explicabo minus illo commodi fugit quos sequi voluptates recusandae,
      voluptatum exercitationem hic modi ducimus, temporibus dolorum, porro a
      fugiat? Labore adipisci porro illo harum, vitae quam? Animi sunt id
      suscipit autem porro dicta tenetur omnis eligendi eos ex!
    </ExpandableText>
  );
}

export default App;
