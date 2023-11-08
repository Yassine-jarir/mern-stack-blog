import React from "react";
import styles from "./singlepage.module.css";
import Image from "next/image";
import p1 from "../../public/p1.jpeg";
import Menu from "@/components/Menu/Menu";
import Comments from "@/components/comments/Comments";

function page() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src={p1} fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Yassine Jarir</span>
              <span className={styles.date}>11.22.33</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={p1} fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              aliquam blanditiis fugiat. Veniam velit atque repellendus vero
              ipsum ab temporibus.
            </p>
            <h4>Lorem ipsum dolor sit amet.</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              aliquam blanditiis fugiat. Veniam velit atque repellendus vero
              ipsum ab temporibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              aliquam blanditiis fugiat. Veniam velit atque repellendus vero
              ipsum ab temporibus.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default page;
