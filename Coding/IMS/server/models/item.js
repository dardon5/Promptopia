import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
  name: String,
  quantity: Number,
  price: Number,
});

const itemData = mongoose.model("item", itemSchema);

export default itemData;
