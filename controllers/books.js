const Books = require("../models/book"); // Importing the book model

exports.createBook = (req, res, next) => {
  Books.create(req.body)
    .then((book) => {
      res.status(201).json(book);
    })
    .catch((err) => {
      next(err); // Passing the error to the error handling middleware
    });
};

exports.getAllBooks = (req, res, next) => {
  Books.find()
    .then((books) => {
      if (books.length === 0) {
        const err = new Error("No Books Found");
        err.status = 404;
        return next(err); // Passing the error to the error handling middleware
      }
      res.status(200).json(books);
    })
    .catch((err) => {
      next(err); // Passing the error to the error handling middleware
    });
};

exports.updateBookByTitle = (req, res, next) => {
  Books.findOneAndUpdate({ title: req.params.title }, req.body, {
    new: true,
  })
    .then((book) => {
      if (!book) {
        const err = new Error("Book not found");
        err.status = 404;
        return next(err); // Passing the error to the error handling middleware
      }
      res.status(200).json(book);
    })
    .catch((err) => {
      next(err); // Passing the error to the error handling middleware
    });
};

exports.deleteBookByTitle = (req, res, next) => {
  Books.findOneAndDelete({ title: req.params.title })
    .then((book) => {
      if (!book) {
        const err = new Error("Book not found");
        err.status = 404;
        return next(err); // Passing the error to the error handling middleware
      }
      res.status(200).json({ message: "Book deleted successfully" });
    })
    .catch((err) => {
      next(err); // Passing the error to the error handling middleware
    });
};

exports.getBooksByGenre = (req, res, next) => {
  Books.find({ genre: req.params.genre })
    .then((books) => {
      if (books.length === 0) {
        const err = new Error("No Books Found for this Genre");
        err.status = 404;
        return next(err); // Passing the error to the error handling middleware
      }
      res.status(200).json(books);
    })
    .catch((err) => {
      next(err); // Passing the error to the error handling middleware
    });
};
