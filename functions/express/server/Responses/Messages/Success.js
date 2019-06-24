const success = (req, res, data , message ) => {
  res.status(200).send({
    success : true,
    data,
    message
  })
}

module.exports = success