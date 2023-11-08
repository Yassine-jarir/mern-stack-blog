"use client";
import React, { useContext, useState } from "react";
import styles from "../login/login.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/AuthContext";

function Login() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [errors, seterrors] = useState("");
  const router = useRouter();
  const { user, dispatch } = useContext(UserContext);
  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/user/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("userToken", JSON.stringify(response.data));

        dispatch({ type: "LOGIN", payload: response.data });
        router.push("/");
      })
      .catch((err) => {
        seterrors(err?.response?.data.error);
      });
  };

  console.log(user);
  return (
    <div className={styles.loginblock}>
      <h1>Login</h1>
      <form onSubmit={handlesubmit}>
        <label htmlFor="Username">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          placeholder="Username"
          id="username"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Password"
          id="password"
          required
        />

        {errors && (
          <div style={{ margin: "-17px 0 16px 0" }}>
            <small style={{ color: "red" }}>{errors}</small>
          </div>
        )}

        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
