import React from "react";
import p1 from "../../public/p1.jpeg";
import styles from "./Featured.module.css";
import Image from "next/image";

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Discover my stories and creative ideas</h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image className={styles.image} alt="image" src={p1} fill />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            ex sequi repellat quidem eveniet possimus ea fugi.
          </h2>
          <p className={styles.postDesc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            reiciendis nostrum esse nesciunt eius laborum libero saepe? Ducimus
            id, quibusdam, beatae perferendis deserunt tenetur voluptates non
            aut sit, harum et?
          </p>
          <button className={styles.btn}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
