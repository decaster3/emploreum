import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Quiz extends Component {
  render () {
    let { question, answers, currentAnswer, changeAnswer, answer, successor } = this.props
    var answersTags = null
    console.log("succse" + successor);
    if (successor) {
      console.log("null");
      answersTags = <textarea rows='10' cols='45' name='text' value={currentAnswer} onChange={(event) => { changeAnswer(event.target.value, successor) }} />
    } else {
      answersTags = answers.map((answersItem, index) => {
        let {answer, successor} = answersItem
        var id = 'answer_' + index

        return (
          <li key={index}>
            <input type='radio' id={id} name='selector' onClick={() => changeAnswer(answer, successor)} />
            <label htmlFor={id}> {answer} </label>
            <div className='check' />
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
      <div className='container'>
        <h2>{question}</h2>
        {answersTags}
        <input type='button' value='Далее' onClick={() => {answer()}} />
      </div>
    )
  }
}

Quiz.propTypes = {
  question: PropTypes.string.isRequired,
  currentAnswer: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  changeAnswer: PropTypes.func.isRequired,
  answer: PropTypes.func.isRequired
}

export default Quiz
