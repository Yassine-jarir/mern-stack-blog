"use client";
import React, { useContext, useEffect, useState } from "react";
import Pagination from "../paginaiton/Pagination";
import styles from "./CardList.module.css";
import Card from "../card/Card";
import axios from "axios";
import { UserContext } from "@/context/AuthContext";

function CardList() {
  const [blogs, setblogs] = useState();
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (user && user.token) {
      axios({
        method: "GET",
        url: "http://localhost:3001/blog/allblogs",
        headers: { Authorization: `Bearer ${user.token}` },
      })
        .then((response) => {
          setblogs(response.data);
          console.log(response);
        })
        .catch((err) => {
          console.log(err.response.data.error);
        });
    }
  }, [user.token]);

  console.log(blogs);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Post</h1>
      <div className={styles.posts}>
        {blogs &&
          blogs.map((blog) => {
            return <Card blogs={blog} />;
          })}
      </div>
      <Pagination />
    </div>
  );
}

export default CardList;
