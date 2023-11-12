const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const Authrequire = async (req, res, next) => {
  // check auth req
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(404).json({ error: "you need an authorization" });
  }
  try {
    const token = authorization.split(" ")[1];
    const { id } = await jwt.verify(token, "YASSINEJARIRFULLSTUCKDEVELOPER");
    const _id = id;

    const user = await userModel.findOne({ _id }).select("_id");
    if (!user) {
      return res.status(401).json({ error: "user not authorized !!" });
    }
    // console.log(token);
    req.user = user;

    next();
  } catch (error) {
    res.status(401).json({ error: "not authorization" });
  }
};
module.exports = Authrequire;
