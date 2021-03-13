import React, { Component } from 'react'
import Card from '../../component/card/card'
import RequestsList from './terms/requests-list'
import AddTermBtn from './terms/add-term-btn'

import './style.css'

class HomePageComponent extends Component {
  render() {
    return (
      <Card className="home-page">
        <RequestsList requests={this.props.requests}/>
        <AddTermBtn/>
      </Card>
    )
  }
}

export default HomePageComponent