import React, { Component } from 'react'
import Card from '../../component/card/card'
import CardContent from '../../component/card/card-content'
import RequestsList from './terms/requests-list'

import './style.scss'

class HomePageComponent extends Component {
  render() {
    return (
      <Card className="home-page">
        <CardContent className="home-page__inner">
         <RequestsList requests={this.props.requests}/>
        </CardContent>
      </Card>
    )
  }
}

export default HomePageComponent