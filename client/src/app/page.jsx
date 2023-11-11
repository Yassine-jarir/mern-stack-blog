"use client";
import Featured from "@/components/featured/Featured";
import styles from "./HomePage.module.css";

import CardList from "@/components/CardList/CardList";
import Menu from "@/components/Menu/Menu";
import CategoryList from "@/components/categorylist/CategoryList";

export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}
