const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const checkApiKey = require("../middleware/chechApiKey");

router.get("/", checkApiKey, bookController.getAllBooks);

router.get("/:id", checkApiKey, bookController.getBooksByID);

router.post("/create", checkApiKey, bookController.createBooks);

router.put("/:id", checkApiKey, bookController.updateBooks);

router.delete("/:id", checkApiKey, bookController.deleteBooks);

module.exports = router;
