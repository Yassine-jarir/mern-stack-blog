import React from "react";
import styles from "./Menu.module.css";
import Menuposts from "../menuPosts/Menuposts";
import MenuCategories from "../menuCategories/MenuCategories";

function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>that's Popular</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <Menuposts widthImage={false} />

      <h2 className={styles.subtitle}>Didscover by topic</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories />

      <h2 className={styles.subtitle}>that's Popular</h2>
      <h1 className={styles.title}>Chosen by the editor</h1>
      <Menuposts widthImage={true} />
    </div>
  );
}

export default Menu;
