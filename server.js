const express = require("express");
const bookRoutes = require("./routes/bookRoutes");

const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Book API - MVC Architechture",
    endpoints: {
      "GET /api/books": "Get all books",
      "GET /api/books/:id": "Get book by ID",
      "POST /api/books/create": "Create a new book",
      "PUT /api/books/:id": "Update a book by ID",
      "Delete /api/books/:id": "Delete a book by ID",
    },
  });
});

app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is started on the http://localhost:${PORT}`);
});
