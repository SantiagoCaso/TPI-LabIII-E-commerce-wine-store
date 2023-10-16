import { createContext, useState } from "react";

export const OrderContext = createContext(null);

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
