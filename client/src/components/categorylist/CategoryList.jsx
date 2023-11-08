import React from "react";
import styles from "./CategoryList.module.css";
import Image from "next/image";
import styleimg from "../../public/style.png";

function CategoryList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <div
          href="/blog/style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src={styleimg}
            alt="at"
            width={32}
            height={32}
            className={styles.image}
          />{" "}
          style
        </div>
        <div
          href="/blog/style"
          className={`${styles.category} ${styles.fashion}`}
        >
          <Image
            src={styleimg}
            alt="at"
            width={32}
            height={32}
            className={styles.image}
          />{" "}
          style
        </div>
        <div href="/blog/style" className={`${styles.category} ${styles.food}`}>
          <Image
            src={styleimg}
            alt="at"
            width={32}
            height={32}
            className={styles.image}
          />{" "}
          style
        </div>
        <div
          href="/blog/style"
          className={`${styles.category} ${styles.travel}`}
        >
          <Image
            src={styleimg}
            alt="at"
            width={32}
            height={32}
            className={styles.image}
          />{" "}
          style
        </div>
        <div
          href="/blog/style"
          className={`${styles.category} ${styles.culture}`}
        >
          <Image
            src={styleimg}
            alt="at"
            width={32}
            height={32}
            className={styles.image}
          />{" "}
          style
        </div>
        <div
          href="/blog/style"
          className={`${styles.category} ${styles.coding}`}
        >
          <Image
            src={styleimg}
            alt="at"
            width={32}
            height={32}
            className={styles.image}
          />{" "}
          style
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
