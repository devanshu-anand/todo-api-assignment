const mongoose = require("mongoose");
//Define a schema
const Schema = mongoose.Schema;
const TodoSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
});
module.exports = mongoose.model("Todo", TodoSchema);
