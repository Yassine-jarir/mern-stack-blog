"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./singlepage.module.css";
import Image from "next/image";

import axios from "axios";
import { useParams } from "next/navigation";
import { UserContext } from "@/context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

function page() {
  const { blog } = useParams();
  const { user } = useContext(UserContext);

  const [singleblog, setblog] = useState();
  const [err, seterr] = useState("");
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://mern-stack-blog1.vercel.app/blog/blog/${blog}`,
      headers: { Authorization: `Bearer ${user?.token}` },
    })
      .then((response) => {
        setblog(response.data);
      })
      .catch((err) => {
        seterr(err);
      });
  }, []);

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
            className="btn btn-outline-dark"
          >
            Edit blog
          </Link>
        </div>
      ) : (
        <div>hello</div>
      )}
      <div className={styles.imgContainer}>
        <Image
          src={`https://mern-stack-blog1.vercel.app/${singleblog?.image}`}
          fill
          className={styles.img}
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: singleblog?.description }} />
    </div>
  );
}

export default page;
