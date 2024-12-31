const express = require("express"); // Importing express module
const router = express.Router(); // Creating a router

const {
  createBook,
  getAllBooks,
  updateBookByTitle,
  deleteBookByTitle,
  getBooksByGenre,
} = require("../controllers/books"); // Importing the book controller

// Route to create a new book
router.post("/", createBook);

// Route to get all books
router.get("/", getAllBooks);

// Route to update a book by title
router.put("/:title", updateBookByTitle);

// Route to delete a book by title
router.delete("/:title", deleteBookByTitle);

// Route to get books by genre
router.get("/genre/:genre", getBooksByGenre);

module.exports = router; // Exporting the router
