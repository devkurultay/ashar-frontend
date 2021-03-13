import React, { Component } from 'react'
import Card from '../../component/card/card'
import CardContent from '../../component/card/card-content'
import TermsList from './terms/terms-list'

import './style.css'

class HomePageComponent extends Component {
  render() {
    console.log(this.props)
    return (
      <Card className="home-page">
        <CardContent noPadding className="home-page__inner">
         <TermsList
           terms={this.props.terms}
         />
        </CardContent>
      </Card>
    )
  }
}

export default HomePageComponent