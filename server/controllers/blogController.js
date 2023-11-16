require("dotenv").config();
const blogModel = require("../models/blogModel");
const userModel = require("../models/userModel.js");
const Multer = require("multer");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return res;
}
const storage = new Multer.memoryStorage();
const upload = Multer({
  storage,
});

const newBlog = async (req, res) => {
  upload.single("my_file")(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    const { title, description } = req.body;

    try {
      if (!req.file) {
        throw new Error("File not received");
      }
      const b64 = Buffer.from(req.file.buffer).toString("base64");
      let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
      const cldRes = await handleUpload(dataURI);
      res.json(cldRes);
      const blog = await blogModel.create({
        title,
        image: cldRes, // or adjust accordingly based on Cloudinary response
        description,
        author,
      });

      return res.status(200).json(blog);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: error.message });
    }
  });
};
// upload image
// newBlog = async (req, res) => {
//   const { title, description, image } = req.body;

//   try {
//     const result = await cloudinaryUploadImage(image);
//     console.log(result);
//     const user = await userModel.findById(req.user._id);
//     const author = user.username;
//     console.log("aauthor", author);
//     const blog = await blogModel.create({
//       title,
//       image: result,
//       description,
//       author,
//     });
//     return res.status(200).json(blog);
//   } catch (error) {
//     console.error(error);
//     return res.status(400).json({ error: error });
//   }
// };

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
