import "./App.css";
import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ColorSchemesExample from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import ProductContainer from "./Components/Products/ProductContainer";
import CreateAnAccount from "./Components/Login/SignIn";
import AboutUs from "./Components/AboutUs/AboutUs";
import CssBaseline from "@mui/material/CssBaseline";
import ContactUs from "./Components/ContactUs/ContacUs";
import PageNotFound from "./Components/404/PageNotFound";
import { ThemeContextProvider } from "./Components/Theme/useContext";
import Login from "./Components/Login/Login";
import { OrderContextProvider } from "./Components/Order/OrderContext";
import Footer from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import CartContainer from "./Components/Cart/CartContainer";
import Account from "./Components/Account/Account";
import CartPage from "./Components/Cart2/CartPage";

function App() {
  return (
    <Router>
      <ThemeContextProvider>
        <OrderContextProvider>
          <CssBaseline />
          <ToastContainer />
          <ColorSchemesExample />
          <Routes>
            <Route path="/" exact element={<AboutUs />} />
            <Route path="/WineStore" element={<AboutUs />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<ProductContainer />} />
            <Route path="/createAnAccount" element={<CreateAnAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/CartPage" element={<CartPage />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </OrderContextProvider>
      </ThemeContextProvider>
      <Footer />
    </Router>
  );
}

export default App;
