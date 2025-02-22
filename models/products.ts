import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String, // URL of the product image
      required: true,
    },
    isHotProduct: {
      type: Boolean,
      default: false, // Default value is false
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
