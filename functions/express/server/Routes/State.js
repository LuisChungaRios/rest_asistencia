const ControllerState = require('../Controllers/State')
const InternalServerError = require('../Responses/Messages/InternalServerError')
const Success = require('../Responses/Messages/Success')

const getStates = async (req, res) => {
  try {
    let states = await ControllerState.getStates()
    Success(req, res, states, 'OK')
  } catch (error) {
    InternalServerError(res, error.message)
  }
}

const postState = async (req, res) => {
  try {
    let state = await ControllerState.saveStates(req.body)
    Success(req, res, state, 'Se registro corectamente')
  } catch (error) {
    InternalServerError(res, error.message)
  }
}

module.exports = {
  getStates,
  postState
}