"use client";
import React, { useEffect, useState } from "react";
import styles from "../login/login.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";

function Signup() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [errors, seterrors] = useState("");
  const router = useRouter();
  const handlesubmit = (e) => {
    e.preventDefault();
    if (passwordsMatch) {
      axios
        .post("https://mern-stack-blog1.vercel.app/user/signup", {
          username: username,
          password: password,
        })
        .then((response) => {
          // console.log(response.data);
          router.push("/login");
          toast.success("signup success, Please Login !!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        })
        .catch((err) => {
          seterrors(err?.response?.data.error);
        });
    }
  };
  useEffect(() => {
    if (password === confirmPassword) {
      setPasswordsMatch(true);
    } else {
      setPasswordsMatch(false);
    }
  }, [confirmPassword, password]);
  return (
    <div className={styles.loginblock}>
      <h1>Signup</h1>
      <form onSubmit={handlesubmit}>
        <label htmlFor="Username">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          placeholder="Username"
          id="username"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Password"
          id="password"
        />
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          id="confirmpassword"
        />
        {!passwordsMatch && (
          <div style={{ margin: "-17px 0 16px 0" }}>
            <small style={{ color: "red" }}>password not muched</small>
          </div>
        )}
        {errors && (
          <div style={{ margin: "-17px 0 16px 0" }}>
            <small style={{ color: "red" }}>{errors}</small>
          </div>
        )}

        <button disabled={!passwordsMatch}>Signup</button>
      </form>
    </div>
  );
}

export default Signup;
