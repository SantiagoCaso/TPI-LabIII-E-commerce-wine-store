import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importa Router y Routes
import ColorSchemesExample from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import ProductContainer from "./Components/Products/ProductContainer";
import CreateAnAccount from "./Components/Login/SignIn";
import AboutUs from "./Components/AboutUs/AboutUs";
import CssBaseline from "@mui/material/CssBaseline";
import ContactUs from "./Components/ContactUs/ContacUs";
import PageNotFound from "./Components/404/PageNotFound";
import {
  ThemeContextProvider,
  ThemeContext,
} from "./Components/Theme/useContext";
import { UserContextProvider } from "./Components/Login/userContext";
import Login from "./Components/Login/Login";
import { useContext } from "react";

function App() {
  return (
    <Router>
      <UserContextProvider>
        <ThemeContextProvider>
          <CssBaseline />
          <ColorSchemesExample />
          <Routes>
            <Route path="/" exact element={<AboutUs />} />
            <Route path="/WineStore" element={<AboutUs />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<ProductContainer />} />
            <Route path="/createAnAccount" element={<CreateAnAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ThemeContextProvider>
      </UserContextProvider>
    </Router>
  );
}

export default App;
