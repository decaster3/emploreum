import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './components/App'
import MainDeveloperTestComponent from './components/main_developer_test_component'
const configureRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/developer_test' component={MainDeveloperTestComponent} />
      </Switch>
    </div>
  )
}
export default configureRoutes
