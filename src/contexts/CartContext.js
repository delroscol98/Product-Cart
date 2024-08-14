import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";

const CartContext = createContext();

const initialState = {
  cart: {
    "Classic Tiramisu": 1,
    "Vanilla Bean Creme Brulee": 4,
    "Vanilla Panna Cotta": 2,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addDessert":

    default:
      throw new Error("Action not recognised");
  }
};

function CartProvider({ children }) {
  const [{ cart }, dispatch] = useReducer(reducer, initialState);

  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext was used outside of CartProvider");
  return context;
}

export { CartProvider, useCart };
