"use client";
import React, { useContext, useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import fb from "../../public/facebook.png";
import youtube from "../../public/youtube.png";
import instagram from "../../public/instagram.png";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themToggle/ThemToggle";
import { UserContext } from "@/context/AuthContext";

function NavBar() {
  const { user } = useContext(UserContext);
  return (
    <div className={styles.container}>
      <div className={styles.titlelink}>
        <Link href="/" className={`${styles.logo} px-2`}>
          <span className={styles.b}>B</span>
          <span>log</span>
          <span className={styles.fy}>.fy</span>
        </Link>
      </div>
      {user?.user.username && <strong> ({user?.user.username})</strong>}
      <div className={styles.links}>
        <ThemeToggle />
        <div className={styles.hiddenLinks}>
          <Link href="/">Home</Link>
        </div>
        <AuthLinks />
      </div>
    </div>
  );
}

export default NavBar;
