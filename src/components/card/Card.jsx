import React from "react";
import styles from "./card.module.css";
import img from "../../public/coding.png";
import Image from "next/image";
import Link from "next/link";

function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={img} alt="img" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CUL TIME</span>
        </div>
        <Link href="/">
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
        </Link>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos facilis
          odio tempore labore animi maiores qui fugiat. Dolorem, temporibus
          eveniet...
        </p>
        <Link href="/">Read More</Link>
      </div>
    </div>
  );
}

export default Card;
