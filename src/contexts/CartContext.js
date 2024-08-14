import { useContext } from "react";
import { createContext } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext was used outside of CartProvider");
  return context;
}

export { CartProvider, useCart };
