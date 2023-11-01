"use client";
import React, { useContext, useState } from "react";
import moon from "../../public/moon.png";
import sun from "../../public/sun.png";
import Image from "next/image";
import styles from "./themToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";
function ThemeToggle() {
  const { theme, dispatch } = useContext(ThemeContext);

  const handleTheme = () => {
    dispatch({
      type: "isDark",
      payload: theme === "dark" ? "light" : "dark",
    });
  };

  console.log(theme);
  return (
    <div
      className={styles.container}
      onClick={handleTheme}
      style={
        theme === "light"
          ? { backgroundColor: "black" }
          : { backgroundColor: "white" }
      }
    >
      <Image src={moon} alt="mon" width={10} height={10} />
      <div
        className={styles.ball}
        style={
          theme === "light"
            ? { left: "0" }
            : { right: "0", backgroundColor: "black" }
        }
      ></div>
      <Image src={sun} alt="sun" width={10} height={10} />
    </div>
  );
}
export default ThemeToggle;
