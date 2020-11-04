import React, { useReducer, useContext, createContext } from "react";

const initialState = 0;

const TrialCountStateContext = createContext(initialState);
const TrialCountDispatchContext = createContext(() => null);

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return (state += 1);
    default:
      throw new Error(`Unknown action: ${action["type"]}`);
  }
};

export const TrialCountStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TrialCountDispatchContext.Provider value={dispatch}>
      <TrialCountStateContext.Provider value={state}>
        {children}
      </TrialCountStateContext.Provider>
    </TrialCountDispatchContext.Provider>
  );
};

export const useTrialCount = () => useContext(TrialCountStateContext);
export const useDispatchTrialCount = () =>
  useContext(TrialCountDispatchContext);
