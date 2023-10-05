import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  //   const object = { value: theme, setter: setTheme };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
