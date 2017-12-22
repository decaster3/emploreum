import { combineReducers } from 'redux'
import QuizReducer from './quiz_reducer.js'
import LangReducer from './lang_reducer.js'

const rootReducer = combineReducers({
  quiz: QuizReducer,
  lang: LangReducer
})

export default rootReducer
