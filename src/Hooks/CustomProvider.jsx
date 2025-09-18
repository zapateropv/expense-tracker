import React, { createContext } from "react";
import useCustom from "./useCustom";

export const CustomContext = createContext();

const CustomProvider = ({ children }) => {
  const custom = useCustom();

  return (
    <CustomContext.Provider value={custom}>
      {children}
    </CustomContext.Provider>
  );
};

export default CustomProvider;
