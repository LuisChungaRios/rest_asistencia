const express = require('express'),
      api = express.Router()

api.get('/', async (req, res ) => {
  await res.status(200).send({
    message: 'Hola mundo'
  })
})

module.exports = api