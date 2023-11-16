const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const cloudinaryUploadImage = async (image) => {
  try {
    const data = await cloudinary.uploader.upload(image, {
      resource_type: "auto",
    });
    return data;
  } catch (error) {
    return error;
  }
};
// const cloudinaryRemoveImage = async (image) => {
//   try {
//     const data = await cloudinary.uploader.destroy(image)
//     return data
//   } catch (error) {
//     return error
//   }
// }

module.exports = cloudinaryUploadImage;
