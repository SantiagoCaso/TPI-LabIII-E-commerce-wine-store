import "./App.css";
import React from "react";
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
import { UserContextProvider } from "./Components/Login/userContext";
import { CartContextProvider } from "./Components/Cart/CartContext";
import Login from "./Components/Login/Login";
import Footer from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import CartPage from "./Components/Cart2/CartPage";

function App() {
  return (
    <Router>
      <UserContextProvider>
        <ThemeContextProvider>
          <CartContextProvider>
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
            </Routes>
          </CartContextProvider>
        </ThemeContextProvider>
      </UserContextProvider>
      <Footer/>
    </Router>
  );
}

export default App;
