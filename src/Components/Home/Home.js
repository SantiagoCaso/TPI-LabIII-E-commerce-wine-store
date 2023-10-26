import React, { useContext } from "react";
import "./Home.css";
import { ThemeContext } from "../Theme/useContext";
import { getAuth } from "@firebase/auth";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const auth = getAuth();
  const user = auth.currentUser;
  return (
    <div className={theme}>
      <h1>We are wine {theme}</h1>
      {/* si no hay nadie logiado esto se rompe  */}
      {user && user.email === true
        ? user.email === "santiagoignaciocaso@gmail.com"
          ? "You are admin"
          : "You are user"
        : "You are guest"}
    </div>
  );
};

export default Home;
