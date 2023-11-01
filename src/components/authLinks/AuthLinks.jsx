"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./AuthLinks.css";

function AuthLinks() {
  const status = "authorization";
  const [toggle, settoggle] = useState(false);

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
      <div className={styles.burger}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {toggle && (
        <div className={styles.responsive}>
          <Link href="/">Home</Link>
          <Link href="/Contact">Contact</Link>
          <Link href="/about">About</Link>
        </div>
      )}
    </>
  );
}

export default AuthLinks;
