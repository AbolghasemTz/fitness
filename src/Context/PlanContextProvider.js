import React, { createContext, useContext, useEffect, useState } from "react";
import { Plans } from "../Constants/db";

const PlanContext = createContext();
function PlanContextProvider({ children }) {
  const [plan, setPlan] = useState([]);

  useEffect(() => {
    setPlan(Plans);
  }, [plan]);

  return <PlanContext.Provider value={plan}>{children}</PlanContext.Provider>;
}

export default PlanContextProvider;

export const usePlan = () => useContext(PlanContext);
