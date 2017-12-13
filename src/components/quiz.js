import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../assets/quiz.css'

class Quiz extends Component {
  render () {
    let { question, answers, currentAnswer, changeAnswer, answer, successor } = this.props
    var answersTags = null
    console.log("succses " + successor)
    if (successor) {
      answersTags = <textarea rows='10' cols='45' name='text' value={currentAnswer} onChange={(event) => { changeAnswer(event.target.value, successor) }} />
    } else {
      answersTags = answers.map((answersItem, index) => {
        let {answer, successor} = answersItem
        var id = 'answer_' + index

        return (
          <li key={index}>
            <input type='radio' id={id} name='selector' onClick={() => changeAnswer(answer, successor)} />
            <label htmlFor={id}> {answer} </label>
            <div className='check ' />
          </li>
        )
      })
      answersTags = (
        <ul>
          {answersTags}
        </ul>
      )
    }

    return (
      <div className='bodyClass'>
        <div id='particle-canvas' />
        <div className='containerr'>
          <h2>{question}</h2>
          {answersTags}
          <input type='button' value='Далее' onClick={() => { answer() }} />
        </div>
      </div>
    )
  }
}

Quiz.propTypes = {
  question: PropTypes.string.isRequired,
  currentAnswer: PropTypes.string.isRequired,
  changeAnswer: PropTypes.func.isRequired,
  answer: PropTypes.func.isRequired
}

export default Quiz
