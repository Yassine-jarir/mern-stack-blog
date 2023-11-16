"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import styles from "./authLinks.module.css";
import { ThemeContext } from "@/context/ThemeContext";
import { UserContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

function AuthLinks() {
  const [toggle, settoggle] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { user, dispatch } = useContext(UserContext);
  const router = useRouter();
  const handlelogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("userToken");
    router.push("/");
  };

  return (
    <>
      {!user ? (
        <>
          <Link href="/login">Login</Link>
          <Link href="/signup" className={`  ${styles.linkres}`}>
            signup
          </Link>
        </>
      ) : (
        <>
          <Link href="/write" className={`  ${styles.none}`}>
            New Blog
          </Link>
          <button
            onClick={handlelogout}
            className={`btn btn-dark ${styles.linkres} ${styles.none}`}
          >
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
          <Link href="/write">New Blog</Link>
          <Link href="/logout">Logout</Link>
        </div>
      )}
    </>
  );
}

export default AuthLinks;
