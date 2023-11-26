const mongoose = require('mongoose');

/* model cars */
const carSchema = new mongoose.Schema({
  Mark: { type: String, require: true },
  Model: { type: String, required: true },
  Color: { type: String },
  Photo: { type: String }
});

module.exports = mongoose.model('cars', carSchema);