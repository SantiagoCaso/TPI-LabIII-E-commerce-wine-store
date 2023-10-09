import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UseUserContext() {
  return useContext(UserContext);
}

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null); // Define tu variable global aquí

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
