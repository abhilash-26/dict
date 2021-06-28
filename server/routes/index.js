const express = require("express");
const router = express.Router();

const { saveToDb, sendWord } = require("../controllers/wordEntryController");

router.post("/save-word", saveToDb);

router.post("/get-word", sendWord);
module.exports = router;
