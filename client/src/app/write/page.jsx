"use client";
import React, { useContext, useState } from "react";
import styles from "./write.module.css";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { UserContext } from "@/context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
function Write() {
  const [description, setdescription] = useState("");
  const [title, settitle] = useState("");
  const [image, setimage] = useState();
  const [err, seterr] = useState("");
  const { user } = useContext(UserContext);
  const router = useRouter();
  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

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
    const base64 = await convertBase64(image);

    const formData = new FormData();
    formData.append("my_file", base64);
    formData.append("title", title);
    formData.append("description", description);
    console.log(base64);

    axios({
      method: "POST",
      url: "https://mern-stack-blog-topaz.vercel.app/blog/write",
      data: formData,
      headers: { authorization: `Bearer ${user?.token}` },
    })
      .then((response) => {
        toast.success(" blog added successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,

          theme: "colored",
        });
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        seterr(err);
      });
  };
  console.log(err);
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

      <button className={styles.publish}>Publish</button>
    </form>
  );
}

export default Write;
