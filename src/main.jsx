import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ProductsProvider from "./context/productsContext/ProductsProvider.jsx";
import { CartProvider } from "./context/cartContext/CartContext.jsx";
import { AuthProvider } from "./context/authContext/AuthProvider.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Toaster } from 'react-hot-toast'
import { WishlistProvider } from "./context/wishlistContext/WishlistProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <WishlistProvider>
            <App />
            <Toaster />
          </WishlistProvider>
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  </StrictMode>
);
