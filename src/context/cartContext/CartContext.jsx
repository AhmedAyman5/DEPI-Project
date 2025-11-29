import { useState, useEffect } from "react";
import { CartContext } from "./useCart";
import toast from "react-hot-toast";

const getInitialCart = () => {
  try {
    const savedCart = localStorage.getItem("shoppingCart");
    return savedCart ? JSON.parse(savedCart) : [];
  } catch (error) {
    console.error("Failed to parse cart from localStorage:", error);
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getInitialCart());

  const [itemCount, setItemCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setItemCount(newTotalCount);

    const newTotalPrice = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(newTotalPrice);

    try {
      localStorage.setItem("shoppingCart", JSON.stringify(cartItems));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  
  const removeFromCart = (productId) => {
    const updatedItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedItems);
    toast.error("Remove item successfully.")
  };

  const updateQuantity = (productId, newQuantity) => {
    const quantity = parseInt(newQuantity);

    if (quantity > 0) {
      const updatedItems = cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: quantity } : item
      );
      setCartItems(updatedItems);
    } else {
      removeFromCart(productId);
    }
  };

  const clearCart = () => {
    setCartItems([]);
    toast.error("Remove all items successfully.")
  };

  const value = {
    cartItems,
    itemCount,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
