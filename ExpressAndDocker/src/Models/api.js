const mongoose = require("mongoose");

const apiSchema = mongoose.Schema({
  id: { type: Number },
  firstName: { type: String },
  lastName: { type: String },
});

module.exports = mongoose.model("ApiSchema", apiSchema);
