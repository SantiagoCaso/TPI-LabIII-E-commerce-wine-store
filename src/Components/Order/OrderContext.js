import { createContext, useState } from "react";

export const OrderContext = createContext();

export function OrderContextProvider({ children }) {
  const [order, setOrder] = useState([]);

  return (
    <>
      <OrderContext.Provider value={{ order, setOrder }}>
        {children}
      </OrderContext.Provider>
    </>
  );
}
