const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TypeJobState = new Schema({
  type_job_id : {
    type: Schema.Types.ObjectId,
    required: [
      true,
      'El tipo de trabajo es requerido'
    ]
  },
  state_id : {
    type: Schema.Types.ObjectId,
    required: [
      true,
      'El estado es requerido'
    ]
  },
  message : {
    type: String,
    default: ''
  }

})
module.exports  = mongoose.model('TypeJobState', TypeJobState)