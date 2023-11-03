"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import styles from "./authLinks.module.css";
import { ThemeContext } from "@/context/ThemeContext";

function AuthLinks() {
  const status = "authorization";
  const [toggle, settoggle] = useState(false);
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {status === "authorization" ? (
        <>
          <Link href="/uesr/logout">Login</Link>
          <Link href="/uesr/signup">signup</Link>
        </>
      ) : (
        <>
          <span>New Blog</span>
          <Link href="/uesr/logout">Logout</Link>
        </>
      )}
      <div
        className={`${styles.burger} `}
        onClick={() => settoggle((prev) => !prev)}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {toggle && (
        <div
          className={`${styles.menu} ${toggle ? styles.open : styles.close} ${
            theme === "light" ? "light" : "dark"
          }`}
        >
          <Link href="/">Home</Link>
          <Link href="/Contact">Contact</Link>
          <Link href="/about">About</Link>
        </div>
      )}
    </>
  );
}

export default AuthLinks;
