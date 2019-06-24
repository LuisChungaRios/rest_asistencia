const express = require('express'),
      app = express(),
      multer = require('multer'),
      upload = multer(),
      api = require('./router')

app
    .set('port',process.env.PORT)
    .use(express.json())
    .use(express.urlencoded({extended: false}))
    .use(upload.array())
    .use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
      res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
      next()
    })
    .use('/api',api)

module.exports = app