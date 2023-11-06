import { useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/header";
import MedicineList from "./Components/MedicineList/medicineList";
import CartProvider from "./Components/Store/CartProvider";
import ListProvider from "./Components/Store/ListProvider";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <div className="App">
      <CartProvider>
        <ListProvider>
          {cartIsShown && <Cart onHideCart={hideCartHandler} />}
          <Header onShowCart={showCartHandler} />
          <Form />
          <MedicineList />
        </ListProvider>
      </CartProvider>
    </div>
  );
}

export default App;
