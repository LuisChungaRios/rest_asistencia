const express = require('express'),
      api = express.Router(),
      users = require('./server/Routes/User'),
      typeJob = require('./server/Routes/TypeJob'),
      state = require('./server/Routes/State')

api.get('/', async (req, res ) => {
  await res.status(200).send({
    message: 'Hola mundo'
  })
})

api.get('/users', users.getUsers)
api.post('/user', users.postUser)
api.get('/type_jobs', typeJob.getTypeJobs)
api.post('/type_job', typeJob.postTypeJob)
api.get('/states', state.getStates)
api.post('/state', state.postState)
module.exports = api