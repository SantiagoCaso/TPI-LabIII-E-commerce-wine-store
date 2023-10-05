import React, { useContext } from "react";
import { ThemeContext } from "./useContext";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import "./Theme.css";
import Button from "react-bootstrap/Button";

const ButtonToggleTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const ThemeHandler = () => {
    console.log({ theme });
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <Button className="button-toggle-theme">
        <IconButton
          sx={{ ml: 1 }}
          onClick={ThemeHandler}
          className="white-icon"
        >
          {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Button>
    </>
  );
};

export default ButtonToggleTheme;
