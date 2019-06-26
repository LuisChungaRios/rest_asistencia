const User = require('../../../../backing/services/mongo/Models/User')
const apiMessage = require('../Responses/Messages/ApiMessage')
class Users {

  async getUsers ()  {
    let result = await User.find({}).exec()
    return result
  }

  async postUser (body) {
    let user = new User(body)
    let result = await user.save()
    return result
  }


}

module.exports =  new Users()