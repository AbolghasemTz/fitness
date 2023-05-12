import React, { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
const PlanContext = createContext();
function PlanContextProvider({ children }) {
  const {i18n}  = useTranslation()
  const [plan, setPlan] = useState([]);

 
  useEffect(() => {
    fetch(`/data/${i18n.language}.json`)
      .then((response) => response.json())
      .then((json) => setPlan(json));
  }, [i18n.language]);
  return <PlanContext.Provider value={plan}>{children}</PlanContext.Provider>;
}

export default PlanContextProvider;

export const usePlan = () => useContext(PlanContext);
