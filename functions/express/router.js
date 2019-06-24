const express = require('express'),
      api = express.Router(),
      users = require('./server/Routes/User'),
      typeJob = require('./server/Routes/TypeJob')

api.get('/', async (req, res ) => {
  await res.status(200).send({
    message: 'Hola mundo'
  })
})

api.get('/users', users.getUsers)
api.post('/user', users.postUser)
api.get('/type_jobs', typeJob.getTypeJobs)
api.post('/type_job', typeJob.postTypeJob)


module.exports = api