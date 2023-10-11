import React, { createContext, useState } from "react";

export const WinesContext = createContext(null);

export function WinesContextProvider({ children }) {
  const [wines, setWines] = useState([]);

  return (
    <WinesContext.Provider value={{ wines, setWines }}>
      {children}
    </WinesContext.Provider>
  );
}
