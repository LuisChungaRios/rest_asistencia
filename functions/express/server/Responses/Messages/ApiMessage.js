
const apiMessage = (err, data ) => {
  if (err) {
    return {
      success : false,
      message: err.message
    }
  }
  return {
    success: true,
    data
  }
}
module.exports = apiMessage