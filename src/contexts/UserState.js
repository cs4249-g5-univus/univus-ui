import React, { useState, useContext, createContext } from "react";

const initialState = "";

const UserStateContext = createContext(initialState);
const UserSetStateContext = createContext(() => null);

export const UserStateProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);
  return (
    <UserSetStateContext.Provider value={setUser}>
      <UserStateContext.Provider value={user}>
        {children}
      </UserStateContext.Provider>
    </UserSetStateContext.Provider>
  );
};

export const useUser = () => useContext(UserStateContext);
export const useSetUser = () => useContext(UserSetStateContext);
