const { uploadMiddleware } = require("./blogController.js");

const updateblog = async (req, res) => {
  uploadMiddleware(
    req,
    res,
    async (err) => {
      if (err) {
        return res.status(400).json({ error: "error uploading image" });
      }
    },

    (module.exports = {
      newBlog,
      allblogs,
      singleBlog,
    })
  );
};
