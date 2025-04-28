const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Create an 'uploads' folder in your project
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

// router.post("/", async (req, res) => {
//   try {
//     const product = new Product(req.body);
//     const saved = await product.save();
//     res.status(201).json(saved);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });
router.post("/", upload.array("imageUrls", 5), async (req, res) => {
  try {
    const {
      name,
      price,
      description,
      genderCategory,
      typeCategory,
      sizes,
      colors,
      stock,
      brand,
    } = req.body;
    const imageUrls = req.files.map((file) => `/uploads/${file.filename}`); // Store local file paths temporarily

    const product = new Product({
      name,
      price,
      description,
      imageUrls, // Store the array of local file paths (or cloud storage URLs later)
      genderCategory,
      typeCategory,
      sizes,
      colors,
      stock,
      brand,
    });

    const saved = await product.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const { genderCategory, typeCategory } = req.query;
    const filter = {};
    if (genderCategory) filter.genderCategory = genderCategory;
    if (typeCategory) filter.typeCategory = typeCategory;

    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
