const mongoose = require('mongoose');
const {mongo} = require('./params');

mongoose.connect(mongo.host, {useNewUrlParser: true})
    .then(() => {
                    console.log('Conexión exitosa')
                  })
    .catch ( err => {
      console.log(`Error de conexión ${err.message}`)
    })  
