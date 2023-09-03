import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importa Router y Routes
import ColorSchemesExample from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import ProductContainer from "./Components/Products/ProductContainer";
import CreateAnAccount from "./Components/Login/SignIn";
import Login from "./Components/Login/Login";
import AboutUs from "./Components/AboutUs/AboutUs";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/ContactUs/ContacUs";
import PageNotFound from "./Components/404/PageNotFound";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
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
      </ThemeProvider>
      <Footer />
    </Router>
  );
}

export default App;
