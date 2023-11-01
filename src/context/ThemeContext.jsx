"use client";
import { createContext, useEffect, useReducer } from "react";
export const ThemeContext = createContext();

const initialValue = (state, action) => {
  switch (action.type) {
    case "isDark": {
      return {
        theme: action.payload,
      };
    }
    default:
      return {
        theme: state.theme,
      };
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(initialValue, {
    theme: "dark",
  });

  return (
    <ThemeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
