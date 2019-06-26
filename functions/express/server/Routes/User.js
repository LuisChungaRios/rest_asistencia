const User = require('./../Controllers/User');
const InternalServerError = require('../Responses/Messages/InternalServerError')
const Success = require('../Responses/Messages/Success')
const getUsers = async (req, res) => {
 try {
  let users = await User.getUsers()
  Success(req, res, users, 'Ok')
  
 } catch (exception) {
   InternalServerError(res, exception.message)
 }
}

const postUser = async (req, res) => {
  try {
    let user = await User.postUser(req.body)
    Success(req, res, user, 'Insertado correctamente')

  } catch (error) {
    InternalServerError(res, error.message)  
  }
}

module.exports = {
  getUsers,
  postUser
}