import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

export const useCart = () => {
  const { cart, setCart } = useContext(CartContext);
  if (!cart) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return { cart, setCart };
};
