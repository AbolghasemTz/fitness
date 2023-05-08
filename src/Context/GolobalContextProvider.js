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
  const [auth, setAuth] = useState(false);
  

  return (
    <GlobalContext.Provider value={{ userData, setUserData ,auth, setAuth}}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;

export const useGlobal = () => useContext(GlobalContext);
