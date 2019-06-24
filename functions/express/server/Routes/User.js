const User = require('./../Controllers/User');
const InternalServerError = require('../Responses/Messages/InternalServerError')
const Success = require('../Responses/Messages/Success')
const getUsers =  (req, res) => {
  let users = User.getUsers()
  if (users.success == false) {
      InternalServerError(res, users.message)
  }
  Success(req, res, users, 'Ok')
  
}

const postUser = (req, res) => {
  let user = User.postUser(req.body)
  if (user.success == false) {
    InternalServerError(res, user.message)
  }
  Success(req, res, user, 'Insertado correctamente')

}

module.exports = {
  getUsers,
  postUser
}