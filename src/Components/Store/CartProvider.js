import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  
  const addItemHandler = (item) => {
    const existingItemIdx = items.findIndex(
        (cartItem) => cartItem.name === item.name 
    )
    if(existingItemIdx !== -1){
        const updatedItems = [...items];
        updatedItems[existingItemIdx].quantity += 1;
        setItems(updatedItems);
    }else{
        setItems((prevItem) => [...prevItem, {...item, quantity:1}]);
    }
  };
  
  console.log(items);
  const contextValue = {
    items: items,
    addItems: addItemHandler,
  };
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
