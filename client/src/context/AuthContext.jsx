"use client";
import { createContext, useEffect, useReducer } from "react";

export const UserContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };
    case "LOGOUT": {
      return {
        user: null,
      };
    }
    default:
      return {
        user: state,
      };
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
  });

  useEffect(() => {
    // Check if localStorage is available before accessing it
    const userToken = localStorage.getItem("userToken")
      ? JSON.parse(localStorage.getItem("userToken"))
      : null;

    dispatch({ type: "LOGIN", payload: userToken });
  }, []);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
