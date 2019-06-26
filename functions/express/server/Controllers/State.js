const ModelState  = require('../../../../backing/services/mongo/Models/State')

class State {
  async getStates () {
    let states = ModelState.find({}).exec()
    return states
  }
  async saveStates (data) {
    let state = new ModelState(data)
    let result = await state.save()
    return result
  }
}

module.exports = new State()