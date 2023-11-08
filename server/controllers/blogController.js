const multer = require("multer");
const path = require("path");
const blogModel = require("../models/blogModel");

// upload image
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../images"));
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, "-") + file.originalname);
  },
});

const uploadMiddleware = multer({ storage }).single("image");

const newBlog = async (req, res) => {
  uploadMiddleware(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: "error uploading image" });
    }

    const { title, description } = req.body;
    const image = req.file.filename;
    const author = req.user._id;
    console.log("aauthor", author);

    try {
      const blog = await blogModel.create({
        title,
        image,
        description,
        author,
      });
      return res.status(200).json(blog);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: "error creating blog" });
    }
  });
};

// allblogs
const allblogs = async (req, res) => {
  const author = await req.user._id;

  try {
    const blogs = await blogModel.find({ author }).sort({ cratedAt: -1 });
    res.status(201).json(blogs);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  newBlog,
  allblogs,
};
