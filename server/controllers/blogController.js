const blogModel = require("../models/blogModel");
const userModel = require("../models/userModel.js");
const cloudinary = require("../utils/cloudinary.js");
const cloudinaryUploadImage = require("../utils/cloudinary.js");

// upload image
newBlog = async (req, res) => {
  const { title, description, image } = req.body;

  try {
    const result = await cloudinaryUploadImage(image);
    console.log(result);
    const user = await userModel.findById(req.user._id);
    const author = user.username;
    console.log("aauthor", author);
    const blog = await blogModel.create({
      title,
      image: result,
      description,
      author,
    });
    return res.status(200).json(blog);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error });
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
  const { title, description, image } = req.body;

  const result = await cloudinary.uploader.upload(image, {
    folder: "blog_images",
  });

  try {
    const blog = await blogModel.findByIdAndUpdate(req.params.id, {
      title,
      description,
      image: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    });
    res.status(200).json({ blog });
  } catch (error) {
    console.log("update error", error);
  }
};

module.exports = {
  updateblog,
  newBlog,
  allblogs,
  singleBlog,
};
