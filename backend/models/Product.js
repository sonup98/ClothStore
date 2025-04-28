const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    imageUrls: [String],

    genderCategory: {
      type: String,
      enum: ["Men", "Women", "Kids", "Unisex"],
      required: true,
    },
    typeCategory: {
      type: String,
      enum: ["Topwear", "Bottomwear", "Footwear", "Accessories"],
      required: true,
    },

    sizes: [String], // e.g. ["S", "M", "L", "XL"]
    colors: [String], // e.g. ["Red", "Blue"]
    stock: { type: Number, default: 0 },
    brand: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
