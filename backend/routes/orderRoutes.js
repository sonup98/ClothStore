const express = require("express");
const router = express.Router();
const Order = require("../models/orderSchema");

router.post("/", async (req, res) => {
  const { cartItems, userId, shippingAddress } = req.body;

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
      shippingAddress,
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
      .populate(
        "items.productId",
        "name price imageUrls status shippingAddress"
      ) // show product info
      .sort({ createdAt: -1 }); // latest orders first

    res.status(200).json({ success: true, orders });
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
      error: err.message,
    });
  }
});
router.get("/:id", async (req, res) => {
  try {
    // 1. Get userId correctly from req.params.id
    const userId = req.params.id;

    // Add basic validation if needed (e.g., check if userId is a valid format)
    if (!userId /* || !isValidObjectId(userId) */) {
      // You might need a helper like isValidObjectId from mongoose
      return res
        .status(400)
        .json({ success: false, message: "Invalid User ID format" });
    }

    // 2. Find orders for that user
    // Consider populating user/product details if needed for the history page,
    // although maybe less critical than the admin list.
    const orders = await Order.find({ userId })
      // .populate(...) // Optional: Add population if needed
      .sort({ createdAt: -1 });

    // 3. Send ONLY ONE response with the correct structure
    res.status(200).json({ success: true, orders }); // Send the object format
  } catch (err) {
    console.error("Error fetching orders for user:", err); // Log specific error
    res.status(500).json({
      success: false,
      message: "Failed to fetch user orders",
      error: err.message,
    });
  }
});
module.exports = router;
