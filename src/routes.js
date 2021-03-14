import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './container/home-page/container'
import AddTerm from './container/home-page/terms/add-term'
import AddSuggestion from './container/term-page/add-suggestion'
import TermDetailsContainer from './container/term-page/term-details-container'
import TranslationSuggestionDetails from './container/home-page/terms/translation-suggestion-details'
import Login from './container/login/login'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/add-term" exact component={AddTerm}/>
        <Route path="/add-suggestion/:term_id" exact component={AddSuggestion}/>
        <Route path="/term/:id" component={TermDetailsContainer}/>
        <Route path="/suggestion/:id" component={TranslationSuggestionDetails}/>
      </Switch>
    </BrowserRouter>

  )
}

export default Routes