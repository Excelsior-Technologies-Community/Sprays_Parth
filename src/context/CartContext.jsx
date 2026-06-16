import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
 const [cartItems, setCartItems] = useState(() => {
  const savedCart = localStorage.getItem("cartItems");
  return savedCart ? JSON.parse(savedCart) : [];
});
useEffect(() => {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}, [cartItems]);

  const addToCart = (product, quantity = 1, selectedWeight = null) => {
    const cartKey = `${product.id}-${selectedWeight || product.weights[0]}`;
    
    const existingItem = cartItems.find(
      (item) => `${item.id}-${item.weight}` === cartKey
    );

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          `${item.id}-${item.weight}` === cartKey
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      const weightIndex = product.weights.indexOf(selectedWeight || product.weights[0]);
      setCartItems([
        ...cartItems,
        {
          id: product.id,
          title: product.title,
          brand: product.brand,
          image: product.image,
          weight: selectedWeight || product.weights[0],
          price: product.price[weightIndex],
          quantity: quantity,
          originalPrice: product.originalPrice[weightIndex],
        },
      ]);
    }
  };

  const removeFromCart = (id, weight) => {
    setCartItems(
      cartItems.filter((item) => !(item.id === id && item.weight === weight))
    );
  };

  const updateQuantity = (id, weight, quantity) => {
    if (quantity <= 0) {
      removeFromCart(id, weight);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id && item.weight === weight
            ? { ...item, quantity }
            : item
        )
      );
    }
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalPrice,
        getTotalItems,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
