"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";

function Providers({ children }) {
  const { theme } = useContext(ThemeContext);

  return <div className={theme}>{children}</div>;
}

export default Providers;
