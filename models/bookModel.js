let books = [
  { id: 1, title: "The Great Gatsby", author: "ScottFitzgerald", year: 1925 },
  { id: 2, title: "Alice in Wonderland", author: "Lewis Carroll", year: 1970 },
  {
    id: 3,
    title: "Around the World in Eighty Days",
    author: "Jules Verne",
    year: 1993,
  },
];

const getAllbook = () => {
  return books;
};

const getBookByID = (id) => {
  return books.find((book) => book.id === parseInt(id));
};

const createBook = (bookData) => {
  const newBook = {
    id: books.length + 1,
    title: bookData.title,
    author: bookData.author,
    year: bookData.year,
  };
  books.push(newBook);
  return newBook;
};

const updateBook = (id, bookData) => {
  const index = books.findIndex((book) => book.id === parseInt(id));
  if (index !== -1) {
    books[index] = { ...books[index], ...bookData };
    return books[index];
  }
  return null;
};

const deleteBook = (id) => {
  const index = books.findIndex((book) => book.id === parseInt(id));
  if (index !== -1) {
    const deletedBook = books.splice(index, 1);
    return deletedBook[0];
  }
  return null;
};

module.exports = {
  getAllbook,
  getBookByID,
  createBook,
  updateBook,
  deleteBook,
};
