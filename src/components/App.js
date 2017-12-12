import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class App extends Component {
  render () {
    return (
      <div>
        Hey
        <Link to='/developer_test'>Go to test</Link>
      </div>
    )
  }
}
