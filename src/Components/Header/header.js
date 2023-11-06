import { useContext } from "react";
import CartContext from "../Store/cart-context";

const Header = (props) => {
  const cartCntx = useContext(CartContext);
  let q = 0;
  cartCntx.items.forEach((item) => {
    q += Number(item.quantity);
  });
  return (
    <section>
      <h2>Medicine Store</h2>
        <button onClick={props.onShowCart}>Cart {q}</button>
    </section>
  );
};

export default Header;
