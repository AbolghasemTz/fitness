import React, { createContext, useContext, useState } from "react";

const initialValues = {
  name: "",
  age: "",
  height: "",
  weight: "",
  phone: "",
  gender: "",
};

const GlobalContext = createContext();
function GlobalContextProvider({ children }) {
  const [userData, setUserData] = useState(initialValues);

  return (
    <GlobalContext.Provider value={{ userData, setUserData }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;

export const useGlobal = () => useContext(GlobalContext);
