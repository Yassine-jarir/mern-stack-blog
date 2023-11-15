const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    image: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },

    description: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("blog", blogSchema);
