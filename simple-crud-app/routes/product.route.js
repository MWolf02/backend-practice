// Importing required modules
const express = require("express"); // Express framework for building web applications
const Product = require('../models/product.models.js'); // Importing the Product model for interacting with MongoDB
const router = express.Router(); // Creating a router instance to define routes
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js'); // Importing controller functions for product operations

// Route Definitions

// Route to get all products
router.get('/', getProducts); // GET request to retrieve all products

// Route to get a single product by ID
router.get("/:id", getProduct); // GET request to retrieve a product by its ID

// Route to create a new product
router.post("/", createProduct); // POST request to create a new product

// Route to update an existing product by ID
router.put("/:id", updateProduct); // PUT request to update a product by its ID

// Route to delete a product by ID
router.delete("/:id", deleteProduct); // DELETE request to delete a product by its ID

// Exporting the router to make it available to other modules
module.exports = router;
