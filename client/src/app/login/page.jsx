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
      .post(
        "https://mern-stack-blog-b83n3x3sh-yassine-jarir.vercel.app/user/login",
        {
          username: username,
          password: password,
        }
      )
      .then((response) => {
        localStorage.setItem("userToken", JSON.stringify(response.data));
        toast.success("logged in success", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        dispatch({ type: "LOGIN", payload: response.data });
        router.push("/");
      })
      .catch((err) => {
        seterrors(err?.response?.data.error);
      });
  };

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
