import Link from "next/link";
import React from "react";
import fb from "../../public/facebook.png";
import tk from "../../public/tiktok.png";
import insta from "../../public/instagram.png";
import ytb from "../../public/youtube.png";
import profil from "../../public/culture.png";
import styles from "./Footer.module.css";
import Image from "next/image";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src={profil} alt="lama blog" width={50} height={50} />
          <h1 className={styles.logoText}>Lamablog</h1>
        </div>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
        <div className={styles.icons}>
          <Image src={fb} alt="" width={18} height={18} />
          <Image src={tk} alt="" width={18} height={18} />
          <Image src={insta} alt="" width={18} height={18} />
          <Image src={ytb} alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
