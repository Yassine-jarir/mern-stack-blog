import React from "react";
import styles from "./blog.module.css";
import Menu from "@/components/Menu/Menu";

function Blog() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat} Blog</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}

export default Blog;
