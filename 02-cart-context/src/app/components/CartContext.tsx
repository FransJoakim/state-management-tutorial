"use client";
import React, { createContext, useState } from "react";
import { type Cart } from "@/api/types";

const useCartState = (initValue: Cart) => useState<Cart>(initValue);

export const CartContext = createContext<ReturnType<
  typeof useCartState
> | null>(null);

export const useCart = () => {
  const cart = React.useContext(CartContext);
  if (!cart) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return cart;
};

const CartProvider = ({
  value,
  children,
}: {
  value: Cart;
  children: React.ReactNode;
}) => {
  const [cart, setCart] = useCartState(value);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
