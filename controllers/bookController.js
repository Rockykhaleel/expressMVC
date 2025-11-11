const bookModel = require("../models/bookModel");

const getAllBooks = (req, res) => {
  try {
    const books = bookModel.getAllbook();
    res.status(200).json({
      success: true,
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getBooksByID = (req, res) => {
  try {
    const book = bookModel.getBookByID(req.params.id);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
    res.status(200).json({
      success: true,
      data: book,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const createBooks = (req, res) => {
  try {
    const { title, author, year } = req.body;
    if (!title || !author || !year) {
      return res.status(400).json({
        success: false,
        message: "Please provide title, author, year",
      });
    }
    const newBook = bookModel.createBook(req.body);
    res.status(200).json({
      success: true,
      data: newBook,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const updateBooks = (req, res) => {
  try {
    const updatedBook = bookModel.updateBook(req.params.id, req.body);
    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "updated book successfully",
      data: updatedBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const deleteBooks = (req, res) => {
  try {
    const deletedBook = bookModel.deleteBook(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Deleted Succesfully",
      data: deletedBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  getAllBooks,
  getBooksByID,
  createBooks,
  updateBooks,
  deleteBooks,
};
