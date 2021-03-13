import React, { Component } from 'react'
import Card from '../../component/card/card'
import CardContent from '../../component/card/card-content'
import RequestsList from './terms/requests-list'
import AddTermBtn from './terms/add-term-btn'

import './style.scss'

class HomePageComponent extends Component {
  render() {
    return (
      <Card className="home-page">
        <CardContent className="home-page__inner">
         <RequestsList requests={this.props.requests}/>
        </CardContent>
        <AddTermBtn />
      </Card>
    )
  }
}

export default HomePageComponent