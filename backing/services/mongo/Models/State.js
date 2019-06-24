const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const State = new Schema({
  name : {
    type: String,
    required: [
      true,
      'El nombre es requerido'
    ]
  },
  hours_discount: {
    type: Number,
    default: 0
  }
})
module.exports = mongoose.model('State',State)