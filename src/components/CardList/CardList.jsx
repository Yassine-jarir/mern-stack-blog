import React from "react";
import Pagination from "../paginaiton/Pagination";
import styles from "./CardList.module.css";
import Card from "../card/Card";

function CardList() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Post</h1>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
}

export default CardList;
