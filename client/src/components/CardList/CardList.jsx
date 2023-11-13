"use client";
import Loading from "@/app/Loading";

import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./CardList.module.css";
import Card from "../card/Card";
import axios from "axios";
import { UserContext } from "@/context/AuthContext";
import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.min.css";
import { Suspense } from "react";
import Link from "next/link";
function CardList() {
  const [blogs, setblogs] = useState([]);
  const [limits, setlimits] = useState(5);
  const [pageCount, setpageCount] = useState();
  const currentPage = useRef();
  const { user } = useContext(UserContext);
  const [err, seterr] = useState("");
  useEffect(() => {
    // if (user && user.token) {
    currentPage.current = 1;
    getallblogs();
    // }
  }, []);

  const handlePageClick = (e) => {
    currentPage.current = e.selected + 1;
    getallblogs();
  };

  const getallblogs = () => {
    axios({
      method: "GET",
      url: `https://mern-stack-blog-b83n3x3sh-yassine-jarir.vercel.app/blog/allblogs?page=${currentPage.current}&limits=${limits}`,
      headers: { Authorization: `Bearer ${user?.token}` },
    })
      .then((response) => {
        // setblogs(response.data);

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
                return <Card blogs={blog} />;
              })}
          </div>
        </Suspense>
      ) : (
        <Link
          href="/signup"
          type="button"
          className="btn btn-outline-dark flex justify-content-center margin-auto container-fluid mb-5"
        >
          Please Signup To Post
        </Link>
      )}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination justify-content-center mt-4"
        pageLinkClassName="page-link"
        pageClassName="page-item"
        activeClassName="active"
        activeLinkClassName="active"
        nextLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
      />
    </div>
  );
}
export default CardList;
