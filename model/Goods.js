const mongoose = require("mongoose");

const GoodsSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true
  },
  img: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  }
});

module.exports = mongoose.model("Goods",GoodsSchema);
