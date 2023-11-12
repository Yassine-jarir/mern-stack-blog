import React from "react";
import styles from "./menuPosts.module.css";
import Image from "next/image";
import p1 from "../../public/p1.jpeg";

function Menuposts({ widthImage }) {
  return (
    <div className={styles.items}>
      <div href="/" className={styles.item}>
        {widthImage && (
          <div className={styles.imageContainer}>
            <Image src={p1} fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <p className={styles.p}>
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
          <div className={styles.detail}>
            <span className={styles.username}>yassine</span>
            <span className={styles.details}>92 11</span>
          </div>
        </div>
      </div>
      <div href="/" className={styles.item}>
        {widthImage && (
          <div className={styles.imageContainer}>
            <Image src={p1} fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>Travel</span>
          <p className={styles.p}>
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
          <div className={styles.detail}>
            <span className={styles.username}>yassine</span>
            <span className={styles.details}>92 11</span>
          </div>
        </div>
      </div>
      <div href="/" className={styles.item}>
        {widthImage && (
          <div className={styles.imageContainer}>
            <Image src={p1} fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.coding}`}>Travel</span>
          <p className={styles.p}>
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
          <div className={styles.detail}>
            <span className={styles.username}>yassine</span>
            <span className={styles.details}>92 11</span>
          </div>
        </div>
      </div>
      <div href="/" className={styles.item}>
        {widthImage && (
          <div className={styles.imageContainer}>
            <Image src={p1} fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Travel</span>
          <p className={styles.p}>
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
          <div className={styles.detail}>
            <span className={styles.username}>yassine</span>
            <span className={styles.details}>92 11</span>
          </div>
        </div>
      </div>
      <div href="/" className={styles.item}>
        {widthImage && (
          <div className={styles.imageContainer}>
            <Image src={p1} fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.style}`}>Travel</span>
          <p className={styles.p}>
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
          <div className={styles.detail}>
            <span className={styles.username}>yassine</span>
            <span className={styles.details}>92 11</span>
          </div>
        </div>
      </div>
      <div href="/" className={styles.item}>
        {widthImage && (
          <div className={styles.imageContainer}>
            <Image src={p1} fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>Travel</span>
          <p className={styles.p}>
            Lorem ipsum dolor, sit amet consectetur adipisicing.
          </p>
          <div className={styles.detail}>
            <span className={styles.username}>yassine</span>
            <span className={styles.details}>92 11</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menuposts;
