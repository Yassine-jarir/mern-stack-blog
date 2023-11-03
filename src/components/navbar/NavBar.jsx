"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import fb from "../../public/facebook.png";
import youtube from "../../public/youtube.png";
import instagram from "../../public/instagram.png";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themToggle/ThemToggle";

function NavBar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src={fb} alt="facebook" width={24} height={24} />
        <Image src={youtube} alt="youtube" width={24} height={24} />
        <Image src={instagram} alt="tiktok" width={24} height={24} />
      </div>
      <div className={styles.logo}> BLOG</div>
      <div className={styles.links}>
        <ThemeToggle />
        <div className={styles.hiddenLinks}>
          <Link href="/">Home</Link>
          <Link href="/Contact">Contact</Link>
          <Link href="/about">About</Link>
        </div>
        <AuthLinks />
      </div>
    </div>
  );
}

export default NavBar;
