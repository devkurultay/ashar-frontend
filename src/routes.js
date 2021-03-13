import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './container/home-page/container'
import AddTerm from './container/home-page/terms/add-term'
import TermDetails from './container/home-page/terms/term-details'
import TranslationSuggestionDetails from './container/home-page/terms/translation-suggestion-details'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/add-term" exact component={AddTerm}/>
        <Route path="/term/:id" component={TermDetails}/>
        <Route path="/suggestion/:id" component={TranslationSuggestionDetails}/>
      </Switch>
    </BrowserRouter>

  )
}

export default Routes