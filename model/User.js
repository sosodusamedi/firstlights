const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const userSchema = new Schema({
  perso: {
    name: {
      type: String,
      required: true
    },
    tel: {
      type: Number,
      required: true
    }
  },
  pratique: {
    // TODO
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
