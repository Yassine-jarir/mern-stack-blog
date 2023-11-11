import React, { Suspense, useContext } from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

function Card({ blogs }) {
  const { title, image, description, createdAt, author, _id } = blogs;

  return (
    <Link href={`/posts/${_id}`} className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={`http://localhost:3001/${image}`}
          alt="img"
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <span>
          CREATED BY : <strong>{author && author}</strong>
        </span>
        <div className={styles.detail}>
          <span className={styles.date}>{createdAt} </span>
          <span className={styles.category}>CUL TIME</span>
        </div>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: description }} />

        <Link href={`/posts/${_id}`} className="btn btn-outline-primary">
          Read More
        </Link>
      </div>
    </Link>
  );
}

export default Card;
