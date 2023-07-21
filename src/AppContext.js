import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export function AppContextProvider({ children }) {
  const [toggleStatus, setToggleStatus] = useState(true);
  const [itemValue, setItemValue] = useState({
    normal: "$4.95",
    gold: "$9.95",
    platinum: "$24.95",
  });
  const [subscriberType, setSubscriberType] = useState("Subscriber")

  return (
    <AppContext.Provider
      value={{
        toggleStatus,
        setToggleStatus,
        itemValue,
        setItemValue,
        subscriberType,
        setSubscriberType
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
