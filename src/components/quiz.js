import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../assets/quiz.css'

class Quiz extends Component {
  render () {
    let { question, answers } = this.props

    let answersTags = answers.map((answer, index) => {
      var id = 'answer_' + index
      return (
        <li key={index}>
          <input type='radio' id={id} name='selector' />
          <label htmlFor={id}> {answer} </label>
          <div className='check' />
        </li>
      )
    })

    return (
      <div className='container'>
        <h2>{question}</h2>
        <ul>
          {answersTags}
        </ul>
      </div>
    )
  }
}

Quiz.propTypes = {
  question: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired
}

export default Quiz
