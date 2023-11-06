import { useState } from "react";
import ListContext from "./list-context";

const ListProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemHandler = (item) => {
    setItems([...items, item]);
  };

  const contextValue = {
    items: items,
    addItem: addItemHandler,
  };
  return (
    <ListContext.Provider value={contextValue}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListProvider;
