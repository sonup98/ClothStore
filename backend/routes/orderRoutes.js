const express = require("express");
const router = express.Router();
const Order = require("../models/orderSchema");

router.post("/", async (req, res) => {
  const { cartItems, userId } = req.body;

  if (!cartItems || cartItems.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  try {
    const order = new Order({
      userId,
      items: cartItems,
      totalAmount,
    });

    await order.save();
    res.status(201).json({ message: "Order placed", order });
  } catch (err) {
    res.status(500).json({ message: "Order failed", error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("userId", "name email") // show user info
      .populate("items.productId", "name price imageUrls status") // show product info
      .sort({ createdAt: -1 }); // latest orders first

    res.status(200).json({ success: true, orders });
  } catch (err) {
    console.error("Error fetching orders:", err);
    res
      .status(500)
      .json({
        success: false,
        message: "Failed to fetch orders",
        error: err.message,
      });
  }
});

module.exports = router;
