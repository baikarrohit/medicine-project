import { useContext, useRef } from "react";
import ListContext from "../Store/list-context";

const Form = () => {
  const nameRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const listCntx = useContext(ListContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const medicineObj = {
      id: Math.random().toString(),
      name: nameRef.current.value,
      desc: descRef.current.value,
      price: priceRef.current.value,
      quantity: 1,
    };
    listCntx.addItem(medicineObj);
  };
  return (
    <section>
      <form onSubmit={submitHandler}>
        <label>Medicine Name:</label>
        <input type="text" ref={nameRef} />
        <label>Description:</label>
        <input type="text" ref={descRef} />
        <label>Price:</label>
        <input type="number" ref={priceRef} />
        <button type="submit">Add Product</button>
      </form>
    </section>
  );
};

export default Form;
