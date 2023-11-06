import { useContext } from "react";
import ListContext from "../Store/list-context";
import CartContext from "../Store/cart-context";

const MedicineList = () => {
  const listCntx = useContext(ListContext);
  const cartCntx = useContext(CartContext);

  const addToCartHandler = (ele) => {
    const cartObj = {
      name: ele.name,
      quantity: ele.quantity,
      price: ele.price,
    };
    cartCntx.addItems(cartObj);
  };
  return (
    <section>
      <ul style={{ listStyle: "none", textAlign: "start" }}>
        {listCntx.items.map((ele) => (
          <li key={ele.id}>
            <strong>{ele.name}</strong> - {ele.desc} - {ele.price} Rs. x
            {ele.quantity}
            <button onClick={() => addToCartHandler(ele)}>Add To Cart</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MedicineList;
