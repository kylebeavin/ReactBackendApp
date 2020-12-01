const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({

  user_id: {
    type: String,
    required: true
  },
  google_group_id: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'active'
  },
  dateOfEntry: {
    type: Date,
    default: Date.now()
  }
});
module.exports = Item = mongoose.model('user', UserSchema);