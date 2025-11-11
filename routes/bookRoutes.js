const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

router.get("/", bookController.getAllBooks);

router.get("/:id", bookController.getBooksByID);

router.post("/create", bookController.createBooks);

router.put("/:id", bookController.updateBooks);

router.delete("/:id", bookController.deleteBooks);

module.exports = router;
