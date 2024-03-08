// "use client";

// import { createContext, useContext, useState } from "react";

// const TabContext = createContext();

// export const useTabContext = () => {
//   return useContext(TabContext);

// };

// export const TabProvider = ({ children }) => {
//   const [tabEvent, setTabEvent] = useState("singleView");

//   const handleTabClick = (view) => {
//     setTabEvent(view);

//   };

//   const contextValue = {
//     tabEvent,
//     handleTabClick,
//   };
//   return (
//     <TabContext.Provider value={contextValue}>{children}</TabContext.Provider>
//   );
// };
