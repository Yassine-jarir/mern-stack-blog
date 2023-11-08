import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

function Card({ blogs }) {
  const { title, image, description, createdAt } = blogs;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={`http://localhost:3001/${image}`}
          alt="img"
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{createdAt} </span>
          <span className={styles.category}>CUL TIME</span>
        </div>
        <Link href="/">
          <h2>{title}</h2>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: description }} />

        <Link href="/">Read More</Link>
      </div>
    </div>
  );
}

export default Card;
