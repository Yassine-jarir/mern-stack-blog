"use client";
import Loading from "@/app/Loading";
import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./CardList.module.css";
import Card from "../card/Card";
import axios from "axios";
import { UserContext } from "@/context/AuthContext";
import ReactJsPagination from "react-js-pagination";
import { Suspense } from "react";
import Link from "next/link";

function CardList() {
  const [blogs, setblogs] = useState([]);
  const [limits, setlimits] = useState(7);
  const [pageCount, setpageCount] = useState();
  const currentPage = useRef();
  const { user } = useContext(UserContext);
  const [err, seterr] = useState("");

  useEffect(() => {
    currentPage.current = 1;
    getallblogs();
  }, []);

  const handlePageClick = (pageNumber) => {
    currentPage.current = pageNumber;
    getallblogs();
  };

  const getallblogs = () => {
    axios({
      method: "GET",
      url: `https://mern-stack-blog-topaz.vercel.app/blog/allblogs?page=${currentPage.current}&limits=${limits}`,
      headers: { Authorization: `Bearer ${user?.token}` },
    })
      .then((response) => {
        setpageCount(response.data.pageCount);
        setblogs(response.data.result);
      })
      .catch((err) => {
        seterr(err?.response?.data.error);
      });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Post</h1>
      {user?.user ? (
        <Suspense fallback={<Loading />}>
          <div className={styles.posts}>
            {blogs &&
              blogs.map((blog) => {
                return <Card blogs={blog} key={blog.id} />;
              })}
          </div>
        </Suspense>
      ) : (
        <Link
          href="/signup"
          type="button"
          className={`btn btn-outline-dark flex justify-content-center margin-auto container-fluid mb-5  ${styles.linkres} .linkres {
  padding: 10px;
  border-radius: 12px;
  background-color: black;
  color: white !important;
  cursor: pointer;
  transition: all 0.4s;
  border: none;
}
.linkres:hover {
  background-color: white;
  border: 1px solid black;
  color: black !important;
}`}
        >
          Please Signup To Post
        </Link>
      )}
      <ReactJsPagination
        activePage={currentPage.current}
        itemsCountPerPage={limits}
        totalItemsCount={pageCount * limits}
        pageRangeDisplayed={5}
        onChange={handlePageClick}
        innerClass={styles.pagination__container}
        linkClassPrev={styles.orangeBtn}
        linkClassNext={styles.orangeBtn}
        linkClassFirst={styles.orangeBtn}
        linkClassLast={styles.orangeBtn}
        activeClass={styles.pagination__active}
        itemClass={styles.linka}
        itemClassFirst={styles.lis}
        itemClassPrev={styles.lis}
        itemClassNext={styles.lis}
        itemClassLast={styles.lis}
      />
    </div>
  );
}

export default CardList;
