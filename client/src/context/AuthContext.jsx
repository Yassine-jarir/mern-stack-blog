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
  const userToken = JSON.parse(localStorage.getItem("userToken"))
    ? JSON.parse(localStorage.getItem("userToken"))
    : null;
  const [state, dispatch] = useReducer(reducer, {
    user: userToken,
  });

  console.log(state.user);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
