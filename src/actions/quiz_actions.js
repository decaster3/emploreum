var C = require('../constants/quiz_constants.js')


export function changeAnswer (currentAnswer, successor) {
  console.log(currentAnswer)
  return {
    type: C.CHANGE_ANSWER,
    currentAnswer,
    successor
  }
}
export function answer () {
  return (dispatch, getState) => {
    var { nextQuestion } = getState().quiz
    let { answers, title, successor } = getState().quiz.questions[nextQuestion]

    dispatch({
      type: C.ADD_ANSWER,
      answers,
      question: title,
      successor
    })

    if (nextQuestion === 'end') {
      dispatch({
        type: C.END_QUIZ
      })
    }
  }
}
