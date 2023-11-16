"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./write.module.css";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { UserContext } from "@/context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "@/utils/firebase";

let storage;
if (typeof window !== "undefined") {
  storage = getStorage(app);
}

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
function Write() {
  const [description, setdescription] = useState("");
  const [title, settitle] = useState("");
  const [file, setfile] = useState(null);
  const [media, setmedia] = useState("");
  const [err, seterr] = useState("");
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

  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime + file.name;
      const storageRef = ref(storage, file);

      const uploadTask = uploadBytesResumable(storageRef, name);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL);
            setmedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  const handlesubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", media);
    formData.append("title", title);
    formData.append("description", description);
    console.log(formData);
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
        onChange={(e) => setfile(e.target.files[0])}
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
