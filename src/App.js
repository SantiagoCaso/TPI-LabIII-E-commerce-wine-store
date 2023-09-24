import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importa Router y Routes
import ColorSchemesExample from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import ProductContainer from "./Components/Products/ProductContainer";
import CreateAnAccount from "./Components/Login/SignIn";
import Login from "./Components/Login/Login";
import AboutUs from "./Components/AboutUs/AboutUs";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/ContactUs/ContacUs";
import PageNotFound from "./Components/404/PageNotFound";
import ThemeContext from "./Components/Theme/useContext";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <Router>
      <ThemeContext.Provider value={theme}>
        <button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
            console.log(theme);
          }}
        >
          {theme} mode
        </button>
        <CssBaseline />
        <ColorSchemesExample />
        <Routes>
          <Route path="/" exact element={<AboutUs />} />
          <Route path="/WineStore" element={<AboutUs />} />
          <Route path="/home" element={<Home theme={theme} />} />
          <Route path="/products" element={<ProductContainer />} />
          <Route path="/createAnAccount" element={<CreateAnAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
