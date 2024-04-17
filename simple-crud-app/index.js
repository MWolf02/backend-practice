// Importing required modules
const express = require("express"); // Express framework for building web applications
const mongoose = require("mongoose"); // Mongoose library for MongoDB object modeling
const Product = require('./models/product.models.js'); // Importing the Product model for interacting with MongoDB
const productRoute = require("./routes/product.route.js"); // Importing the product routes

// Creating an instance of the Express application
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());
// Middleware to parse incoming form data
app.use(express.urlencoded({ extended: false }));

// Defining routes for products
app.use("/api/products", productRoute); // Using the product routes for '/api/products' endpoint

// Route for the root URL
app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated"); // Sending a simple message for the root URL
});

// Connecting to the MongoDB database
mongoose
  .connect(
    // MongoDB connection string
    "mongodb+srv://MWolf:wtp92tpe@backenddb.dwn1mav.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to DataBase!"); // Logging a success message upon successful connection
    // Starting the server
    app.listen(3000, () => {
      console.log("Server is running on port 3000"); // Logging a message indicating the server is running
    });
  })
  .catch(() => {
    console.log("Connection Failed!"); // Logging an error message if connection fails
  });
