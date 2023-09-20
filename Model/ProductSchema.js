const { default: mongoose } = require("mongoose");

const productSchema = mongoose.Schema({
  key: {
    type: Number,
    required: [true, "give a title"],
  },

  title: {
    type: String,
    required: [true, "give a title"],
  },

  img: {
    type: String,
    // required: [true, "provide a img"],
  },

  s_d: {
    type: String,
    required: [true, "provide a Email"],
  },

  l_d: {
    type: String,
    required: [true, "provide a Email"],
  },

  tech_stack: {
    type: String,
    required: [true, "Provide a valid name"],
  },
});

module.exports = mongoose.model("Product", productSchema);
