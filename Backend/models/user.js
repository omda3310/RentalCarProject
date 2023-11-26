const mongoose = require('mongoose');


/* model users */
const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: {type: String, required: true}
});

module.exports = mongoose.model('users', userSchema);
