const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TypeJob = new Schema({
  name : {
    type: String,
    required: [
      true,
      'El nombre es requerido'
    ]
  },
  working_hours_user : {
    type: Boolean,
    default: true
  },
  month_hour : {
    type: Number,
    required: [
      true,
      'Las hora total del mes es requerido'
    ]
  },
  day_hour : {
    type: Number,
    required: [
      true,
      'Las hora total del día es requerido'
    ]
  }

})

module.exports = mongoose.model('TypeJob', TypeJob)