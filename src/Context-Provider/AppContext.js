import React, { createContext, useContext, useEffect, useState } from "react";
import { toggleData } from "../Data/toggleData";

const initialStatus = toggleData[0].data;

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export function AppContextProvider({ children }) {
  const [toggleStatus, setToggleStatus] = useState(initialStatus);
  const [itemValue, setItemValue] = useState("");
  const [subscriberType, setSubscriberType] = useState("Subscriber");
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  useEffect(() => {
    const matchingData = toggleData.find((item) => item.data === toggleStatus);
    if (matchingData) {
      setItemValue(matchingData.charges);
    }
  }, [toggleStatus]);

  return (
    <AppContext.Provider
      value={{
        toggleStatus,
        setToggleStatus,
        itemValue,
        setItemValue,
        subscriberType,
        setSubscriberType,
        hamburgerMenu,
        setHamburgerMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
