import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../Store/cart-context";

const Cart = (props) => {
  const cartCntx = useContext(CartContext);

  const cartItems = (
    <ul>
      {cartCntx.items.map((item, idx) => (
        <li key={idx}>
          <div>
            <h2>{item.name}</h2>
            <p>{item.price}Rs.</p>
            <p>Qty. {item.quantity}</p>
          </div>
        </li>
      ))}
    </ul>
  );
  const totalAmount = cartCntx.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <Modal onHideCart={props.onHideCart}>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div>
        <button>Cancel</button>
        <button>Place Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
