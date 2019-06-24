const app = require('./app'),
      mongo = require('../../backing/config/mongo')

app.listen(app.get('port'), 
      () => {
        console.log(  `Iniciando api en el port ${app.get('port')}`)
      }
    )