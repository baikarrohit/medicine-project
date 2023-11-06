import React from "react";

const ListContext = React.createContext({
    items:[],
    addItem:(item)=>{}
})

export default ListContext;