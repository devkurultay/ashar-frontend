import React, { Component } from 'react'
import Card from '../../component/card/card'
import RequestsList from './terms/requests-list'

import './style.scss'

class HomePageComponent extends Component {
  render() {
    return (
      <Card className="home-page">
        <RequestsList requests={this.props.requests}/>
      </Card>
    )
  }
}

export default HomePageComponent