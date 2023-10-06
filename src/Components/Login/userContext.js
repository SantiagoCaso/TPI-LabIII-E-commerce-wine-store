import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [userType, setUserType] = useState(null);

  return (
    <UserContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserContext.Provider>
  );
}
