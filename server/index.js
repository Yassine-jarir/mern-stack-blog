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
app.use(
  cors({
    origin: ["https://deploy-mern-frontend.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.json("hello");
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
    app.listen(3001, () => {
      console.log("success");
    });
  })
  .catch((error) => console.log(error));
