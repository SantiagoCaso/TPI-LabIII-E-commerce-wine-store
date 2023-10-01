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
          <Route path="/WineStore" element={<AboutUs theme={theme}/>} />
          <Route path="/home" element={<Home theme={theme} />} />
          <Route path="/products" element={<ProductContainer theme={theme}/>} />
          <Route path="/createAnAccount" element={<CreateAnAccount theme={theme} />} />
          <Route path="/login" element={<Login theme={theme}/>} />
          <Route path="/contactUs" element={<ContactUs theme={theme} />} />
          <Route path="*" element={<PageNotFound theme={theme}/>} />
        </Routes>
      </ThemeContext.Provider>
      <Footer/>
    </Router>
  );
}

export default App;
