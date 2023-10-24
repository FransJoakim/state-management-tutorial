"use client";
import { Cart } from "@/api/types";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export const CartContext = createContext<{
  cart: Cart;
  setCart: Dispatch<SetStateAction<Cart>>;
}>({ cart: { products: [] }, setCart: () => {} });

export const CartContextProvider = ({
  children,
  value,
}: {
  children: any;
  value: Cart;
}) => {
  const [cart, setCart] = useState<Cart>(value);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
