"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./singlepage.module.css";
import Image from "next/image";

import axios from "axios";
import { useParams } from "next/navigation";
import { UserContext } from "@/context/AuthContext";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function page() {
  const { blog } = useParams();
  const { user } = useContext(UserContext);

  const [singleblog, setblog] = useState();
  const [err, seterr] = useState("");
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://mern-stack-blog-topaz.vercel.app/blog/blog/${blog}`,
      headers: { Authorization: `Bearer ${user?.token}` },
    })
      .then((response) => {
        setblog(response.data);
      })
      .catch((err) => {
        seterr(err);
      });
  }, []);
  const handleEdit = () => {
    toast.error("this is not your blog, you can only edit your own blog", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className={styles.container}>
      <h1>{singleblog?.title}</h1>

      <span className={styles.date}>{singleblog?.createdAt}</span>

      <div className={styles.author}>
        <span className={styles.user}>Created by :</span>{" "}
        <strong>@{singleblog?.author}</strong>
      </div>
      {user?.user.username == singleblog?.author ? (
        <div>
          <Link
            href={`/edit/${singleblog?._id}`}
            className={`${styles.linkres}`}
          >
            Edit blog
          </Link>
        </div>
      ) : (
        <button onClick={handleEdit} className={`${styles.linkres}`}>
          Edit blog
        </button>
      )}
      <div className={styles.imgContainer}>
        <Image src={singleblog?.image} fill className={styles.img} />
      </div>
      <div
        className={styles.desc}
        dangerouslySetInnerHTML={{ __html: singleblog?.description }}
      />
    </div>
  );
}

export default page;
