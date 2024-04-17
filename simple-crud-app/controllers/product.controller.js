// Importing the Product model
const Product = require('../models/product.models');

// Controller functions for handling product operations

// Get all products
const getProducts = async (req, res) => {
  try {
    // Find all products in the database
    const products = await Product.find({});
    // Send response with status 200 and array of products
    res.status(200).json(products);
  } catch (error) {
    // Send error response with status 500 and error message
    res.status(500).json({ message: error.message });
  }
};

// Get a single product by ID
const getProduct = async (req, res) => {
  try {
    // Extract ID from request parameters
    const { id } = req.params;
    // Find product by ID in the database
    const product = await Product.findById(id);
    // Send response with status 200 and product details
    res.status(200).json(product);
  } catch (error) {
    // Send error response with status 500 and error message
    res.status(500).json({ message: error.message });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  try {
    // Create a new product with data from request body
    const product = await Product.create(req.body);
    // Send response with status 200 and created product details
    res.status(200).json(product);
  } catch (error) {
    // Send error response with status 500 and error message
    res.status(500).json({ message: error.message });
  }
};

// Update an existing product by ID
const updateProduct = async (req, res) => {
  try {
    // Extract ID from request parameters
    const { id } = req.params;
    // Find and update product by ID with data from request body
    const product = await Product.findByIdAndUpdate(id, req.body);
    // If product not found, send 404 status with error message
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    // Retrieve updated product from database
    const updatedProduct = await Product.findById(id);
    // Send response with status 200 and updated product details
    res.status(200).json(updatedProduct);
  } catch (error) {
    // Send error response with status 500 and error message
    res.status(500).json({ message: error.message });
  }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
  try {
    // Extract ID from request parameters
    const { id } = req.params;
    // Find and delete product by ID
    const product = await Product.findByIdAndDelete(id);
    // If product not found, send 404 status with error message
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    // Send response with status 200 and success message
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    // Send error response with status 500 and error message
    res.status(500).json({ message: error.message });
  }
};

// Exporting controller functions to make them available for use in other modules
module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
