"use client";
import React, { useState } from "react";
import styles from "./write.module.css";
import "react-quill/dist/quill.bubble.css";
import ReactQuill from "react-quill";
import Image from "next/image";
import plus from "../../public/plus.png";

function Write() {
  const [open, setOpen] = useState(false);
  const [value, setvalue] = useState("");
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />

      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(true)}>
          <Image src={plus} alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input type="file" id="image" />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setvalue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
}

export default Write;
