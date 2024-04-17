// Importing Mongoose library for MongoDB object modeling
const mongoose = require("mongoose");

// Defining the schema for the Product model
const ProductSchema = mongoose.Schema(
  {
    // Field for product name
    name: {
      type: String, // Data type is String
      required: [true, "Please enter product name"], // Name is required, error message if not provided
    },

    // Field for product quantity
    quantity: {
      type: Number, // Data type is Number
      required: true, // Quantity is required
      default: 0, // Default value is 0 if not provided
    },

    // Field for product price
    price: {
      type: Number, // Data type is Number
      required: true, // Price is required
      default: 0, // Default value is 0 if not provided
    },

    // Field for product image URL
    image: {
      type: String, // Data type is String
      required: false, // Image is optional
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields to the document
  }
);

// Creating a model named "Product" based on the ProductSchema
const Product = mongoose.model("Product", ProductSchema);

// Exporting the Product model to make it available for use in other modules
module.exports = Product;
