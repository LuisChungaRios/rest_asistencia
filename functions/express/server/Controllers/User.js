const User = require('../../../../backing/services/mongo/Models/User')
const apiMessage = require('../Responses/Messages/ApiMessage')
class Users {

  async getUsers ()  {
    await User.find({}).exec((err, data ) => {
      apiMessage(err,data)
    })  
  }

  async postUser (body) {
    let user = new User(body)
    await user.save((err, data) => {
      apiMessage(err,data)
    })
  }


}

module.exports =  new Users()