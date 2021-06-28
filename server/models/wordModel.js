const mongoose = require("mongoose");

const schema = mongoose.Schema({
  wordName: {
    type: String,
    required: true,
  },
  wordDefinition: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Word", schema, "Word");
