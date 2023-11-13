"use client";
import moon from "../../public/moon.png";
import sun from "../../public/sun.png";
import Image from "next/image";
import styles from "./ThemToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image src={moon} alt="mon" width={10} height={10} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src={sun} alt="sun" width={10} height={10} />
    </div>
  );
};

export default ThemeToggle;
