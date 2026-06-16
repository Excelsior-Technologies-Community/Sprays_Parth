import { createContext, useContext, useState } from "react";

const CartUIContext = createContext();

export const CartUIProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartUIContext.Provider
      value={{
        isCartOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartUIContext.Provider>
  );
};

export const useCartUI = () => useContext(CartUIContext);
