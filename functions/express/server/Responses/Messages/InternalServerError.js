const internalServerError = (res, message) => {
  res.status(500).send({
    success: false,
    message
  })
}

module.exports = internalServerError