const express = require("express");
const {
  newBlog,
  allblogs,
  singleBlog,
  updateblog,
  deleteblog,
} = require("../controllers/blogController");
const Authrequire = require("../middleware/Authrequire");
const router = express.Router();
router.use(Authrequire);

router.post("/write", newBlog);
router.get("/allblogs", allblogs);
router.get("/blog/:id", singleBlog);
router.patch("/update/:id", updateblog);
router.delete("/blog/:id", deleteblog);

module.exports = router;
