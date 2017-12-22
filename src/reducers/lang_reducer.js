var C = require('../constants/quiz_constants.js')
var initialState = require('./initial_state.js')

module.exports = function (currentstate = initialState.lang, action) {
  switch (action.type) {
    case C.CHANGE_LANGUAGE:
      return {
        ...currentstate,
        current_lang: action.lang
      }
    default:
      return currentstate
  }
}
