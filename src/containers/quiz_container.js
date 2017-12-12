import React, { Component } from 'react'
import Quiz from '../components/quiz.js'

class QuizContainer extends Component {
  render () {
    return (
      <div>
        <Quiz question={'What is your name?'} answers={['1', '2']} />
        <div className='signature'>
          <p>Produced by <a href='https://hikester.me'>Hikster</a></p>
        </div>
      </div>
    )
  }
}

export default QuizContainer
