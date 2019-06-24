const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema({
  name : {
    type : String,
    required: [
      true,
      'El nombre es requerido'
    ]
  },
  last_name : {
    type: String,
    required: [
      true, 
      'El apellido es requerido'
    ]
  },
  type_job: {
    type: Schema.Types.ObjectId,
    required: [
      true, 
      'El tipo de trabajo es requerido'
    ]
  },
  id_sql : {
    type: Number,
    required: [
      true,
      'El id de mysql es requerido'
    ]
  }
})

module.exports = mongoose.model('User', User)