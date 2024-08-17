import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";

const CartContext = createContext();

const initialState = {
  cart: [
    { name: "Classic Tiramisu", price: 5.5, id: "7049", count: 1 },
    { name: "Vanilla Bean Creme Brulee", price: 7, id: "fe6a", count: 4 },
    { name: "Vanilla Panna Cotta", price: 6.5, id: "999c", count: 2 },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addDessert":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      throw new Error("Action not recognised");
  }
};

function CartProvider({ children }) {
  const [{ cart }, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext was used outside of CartProvider");
  return context;
}

export { CartProvider, useCart };
