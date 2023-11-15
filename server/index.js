require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const blogRoute = require("./routes/blogRoute");
const mongoose = require("mongoose");
const path = require("path");

// global middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  const allowedOrigins = [
    "https://mern-stack-blog-frontend.vercel.app",
    "http://localhost:3000",
  ];
  const origin = req.headers.origin;

  // If the request is from Cloudinary, allow all origins
  if (req.headers["user-agent"].includes("Cloudinary")) {
    res.header("Access-Control-Allow-Origin", "*");
  } else if (allowedOrigins.includes(origin)) {
    // If the request is from an allowed origin, set the specific origin
    res.header("Access-Control-Allow-Origin", origin);
  }

  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
});
//routes
app.use("/user", userRouter);
app.use("/blog", blogRoute);

// static folder
app.use(express.static(path.join(__dirname, "images")));

// connect
mongoose
  .connect(
    "mongodb+srv://yassine:yassine@cluster0.4mvd9mo.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(process.env.PORT || 3001, () => {
      console.log("success");
    });
  })
  .catch((error) => console.log(error));
module.exports = app; // export the app
