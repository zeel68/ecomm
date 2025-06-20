import React, { createContext } from "react";
import Products from "../Products"; // Import your products list

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const ContextValue = {
    Products,
  };

  return (
    <Context.Provider value={ContextValue}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
