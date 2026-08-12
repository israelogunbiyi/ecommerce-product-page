import { useState } from "react";
import initialProducts from "../product";
import { productContext } from "./ProductContext";

function ProductContextProvider({ children }) {
  const products = initialProducts;
  const [cart, setCart] = useState([]);

const addToCart = (product, qty) => {
  if (qty === 0) return;

  setCart((prev) => {
    const existingProduct = prev.find((item) => item.id === product.id);

    if (existingProduct) {
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + qty }
          : item, 
      );
    }

    return [...prev, { ...product, quantity: qty }];
  });
};
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  const clearCart = () => {
    setCart([]);
  };
  return (
    <productContext.Provider
      value={{
        products,
        clearCart,
        cart,
        addToCart,
        removeItem,
      }}
    >
      {children}
    </productContext.Provider>
  );
}

export default ProductContextProvider;
