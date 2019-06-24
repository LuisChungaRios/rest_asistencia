const mongoose = require('mongoose');
const Schema = mongoose.Schema
const Assistance = new Schema({
  date : {
    type:String,
    required: [
      true, 
      'La fecha es requerida'
    ]
  },
  start_time : {
    type: String,
    required: [
      true,
      'La hora de inicio es requerida'
    ],
    end_time : {
      type: String,
      required: [
        true,
        'La hora de salida es requerida'
      ],
      user_id: {
        type: Schema.Types.ObjectId,
        required: [
          true,
          'El usuario es requerido'
        ]
      },
      type_job : {
        type: Schema.Types.ObjectId,
        required: [
          true, 
          'El tipo de trabajo es requerido'
        ]
      },
      description: {
        type: String
      }
    }
  }
})

module.exports = mongoose.model('Assistance', Assistance)