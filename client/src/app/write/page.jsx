"use client";
import React, { useContext, useState } from "react";
import styles from "./write.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { UserContext } from "@/context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

function Write() {
  const [description, setdescription] = useState("");
  const [title, settitle] = useState("");
  const [image, setimage] = useState();
  const { user } = useContext(UserContext);
  const router = useRouter();
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

  const handlesubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    // formData.append("author", user.user._id);

    axios({
      method: "POST",
      url: "http://localhost:3001/blog/write",
      data: formData,
      headers: { authorization: `Bearer ${user?.token}` },
    })
      .then((response) => {
        console.log(response);
        toast.success(" blog added successfully", {
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
        console.log(err);
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

      <ToastContainer />
      <button className={styles.publish}>Publish</button>
    </form>
  );
}

export default Write;
