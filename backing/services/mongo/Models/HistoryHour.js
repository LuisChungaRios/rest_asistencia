const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const HistoryHour = new Schema({
  user_id : {
    type: Schema.Types.ObjectId,
    required: [
      true,
      'El usuario es requerido'
    ]
  },
  date: {
    type: String,
    required: [
      true,
      'La fecha es requerida'
    ]
  },
  extra_hours: {
    type: Number,
    default: 0
  },
  deuda_hours : {
    type: Number,
    default: 0
  },
  rewarded_hours : {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('HistoryHour', HistoryHour)