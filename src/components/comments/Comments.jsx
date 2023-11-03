import Image from "next/image";
import Link from "next/link";
import React from "react";
import p1 from "../../public/p1.jpeg";
import styles from "./Comments.module.css";

function Comments() {
  const status = "authentication";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authentication" ? (
        <div className={styles.write}>
          <textarea className={styles.img} placeholder="write a comment...">
            <button className={styles.button}>Send</button>
          </textarea>
        </div>
      ) : (
        <Link href="login">login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src={p1}
              width={50}
              height={50}
              alt="d"
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>yassine jarir</span>
              <span className={styles.date}>11.22.33</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            laudantium enim quas iure eos ullam beatae quam et velit porro?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
