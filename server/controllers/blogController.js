const blogModel = require("../models/blogModel");
const userModel = require("../models/userModel.js");
const cloudinary = require("../utils/cloudinary.js");

const newBlog = async (req, res) => {
  const { title, description, image } = req.body;
  const user = await userModel.findById(req.user._id);
  author = user.username;

  try {
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(image, {
      folder: "blog_images", // Specify the folder in Cloudinary
    });
    const blog = await blogModel.create({
      title,
      image: result.secure_url,

      description,
      author,
    });
    return res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: "error creating blog" });
  }
};

// allblogs
const allblogs = async (req, res) => {
  try {
    const blogs = await blogModel.find({}).sort({ createdAt: -1 });

    const page = parseInt(req.query.page);
    const limits = parseInt(req.query.limits);

    const startindex = (page - 1) * limits;
    const endindex = page * limits;

    const results = {};
    // 1- total blogs
    results.totalBlogs = blogs.length;

    //2- how many page
    results.pageCount = Math.ceil(blogs.length / limits) || 1;
    // next and prev btn
    if (endindex < blogs.length) {
      results.next = {
        page: page + 1,
      };
    }
    if (startindex > 0) {
      results.prev = {
        page: page - 1,
      };
    }
    // 3- each page have 10 docs
    results.result = blogs.slice(startindex, endindex);

    res.status(201).json(results);
  } catch (error) {
    console.log(error);
  }
};

// get one blog
const singleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogModel.findById(id);
    res.status(200).json(blog);
    console.log({ blog });
  } catch (error) {
    console.log("error blog", error);
  }
};

const updateblog = async (req, res) => {
  uploadMiddleware(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: "error uploading image" });
    }
    try {
      const { title, description } = req.body;
      const image = req.file.filename;

      const blog = await blogModel.findByIdAndUpdate(req.params.id, {
        title,
        description,
        image,
      });
      res.status(200).json({ blog });
    } catch (error) {
      console.log("update error", error);
    }
  });
};

module.exports = {
  updateblog,
  newBlog,
  allblogs,
  singleBlog,
};
