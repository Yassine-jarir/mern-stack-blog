const express = require("express");
const { newBlog, allblogs } = require("../controllers/blogController");
const Authrequire = require("../middleware/Authrequire");
const router = express.Router();
router.use(Authrequire);

router.post("/write", newBlog);
router.get("/allblogs", allblogs);

module.exports = router;
