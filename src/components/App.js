import React, { Component } from 'react'
import Quiz from './quiz.js'

export default class App extends Component {
  render () {
    return (
      <div>
        <Quiz question={'What is your name?'} answers={['1', '2']}/>
      </div>
    )
  }
}
