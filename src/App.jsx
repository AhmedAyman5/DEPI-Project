import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  Products,
  CartPage,
  CheckoutPage,
  ConfirmationPage,
  ErrorsPage,
  Login,
  Signup,
  AdminPanel,
  ProductDetails,
  WishList,
} from "./pages/exportPages";
import { Layout, ScrollToTop } from "./components/exportComponents";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Layout>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="*" element={<ErrorsPage />} />
          </Routes>
        </ScrollToTop>
      </Layout>
    </Router>
  );
}

export default App;
