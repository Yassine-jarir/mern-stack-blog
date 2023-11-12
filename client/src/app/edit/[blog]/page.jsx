"use client";
import { useParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import styles from "../../write/write.module.css";
import { UserContext } from "@/context/AuthContext";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Edit() {
  const { blog } = useParams();
  const [description, setdescription] = useState("");
  const [title, settitle] = useState("");
  const [image, setimage] = useState();
  const { user } = useContext(UserContext);
  const router = useRouter();
  const [err, seterr] = useState("");
  var modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://mern-stack-blog1.vercel.app/blog/blog/${blog}`,
      headers: { authorization: `Bearer ${user?.token}` },
    })
      .then((response) => {
        settitle(response.data.title);
        setdescription(response.data.description);
      })
      .catch((err) => {
        seterr(err);
      });
  }, []);
  const handlesubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);
    axios({
      method: "PATCH",
      url: `http://localhost:3001/blog/update/${blog}`,
      headers: { authorization: `Bearer ${user.token}` },
      data: formData,
    })
      .then((result) => {
        seterr(result.data);
        toast.success(" blog uploaded successfully!!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        router.push("/");
      })
      .catch((err) => {
        seterr(err);
      });
  };

  return (
    <form onSubmit={handlesubmit} className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => settitle(e.target.value)}
        className={styles.input}
        required
      />

      <input
        type="file"
        onChange={(e) => setimage(e.target.files[0])}
        className={styles.input}
        required
      />

      <ReactQuill
        modules={modules}
        formats={formats}
        theme="snow"
        value={description}
        onChange={(e) => setdescription(e)}
        className={styles.quill}
      />

      {/* <ToastContainer /> */}
      <button className={styles.publish}>Publish</button>
    </form>
  );
}

export default Edit;
