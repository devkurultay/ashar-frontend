import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './container/home-page/container'
import AddTerm from './container/home-page/terms/add-term'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/add-term" exact component={AddTerm}/>
      </Switch>
    </BrowserRouter>

  )
}

export default Routes