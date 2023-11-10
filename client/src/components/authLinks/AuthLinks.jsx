"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import styles from "./authLinks.module.css";
import { ThemeContext } from "@/context/ThemeContext";
import { UserContext } from "@/context/AuthContext";

function AuthLinks() {
  const [toggle, settoggle] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { user, dispatch } = useContext(UserContext);
  console.log(user);
  const handlelogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("userToken");
  };

  return (
    <>
      {!user ? (
        <>
          <Link href="/login">Login</Link>
          <Link href="/signup">signup</Link>
        </>
      ) : (
        <>
          <Link href="/write">New Blog</Link>
          <button onClick={handlelogout} className="btn btn-dark">
            Logout
          
          </button>
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
