import React, { Component } from 'react'
import Quiz from '../components/quiz.js'
import { changeAnswer, answer } from '../actions/quiz_actions.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class QuizContainer extends Component {
  render () {
    let { currentQuestion, currentAnswers, currentAnswer, successor } = this.props.quiz
    return (
      <div className='bodyClass'>
        <Quiz
          answer={this.props.answer}
          changeAnswer={this.props.changeAnswer}
          question={currentQuestion}
          answers={currentAnswers}
          currentAnswer={currentAnswer}
          successor={successor}
        />

        <div className='signature'>
          <p>Produced by <a href='https://hikester.me'>Hikster</a></p>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    quiz: state.quiz
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    {
      changeAnswer: changeAnswer,
      answer: answer
    },
    dispatch
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer)
