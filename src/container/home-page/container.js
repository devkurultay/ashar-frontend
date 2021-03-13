import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomePageComponent from './component'
import * as homeActions from './actions'

class HomePageContainer extends Component {

  componentDidMount() {
    this.props.requestsRequest()
  }

  render() {
    return <HomePageComponent {...this.props} />
  }
}

const mapStateToProps = state => ({
  ...state.home
})

const mapDispatchToProps = dispatch => ({
    requestsRequest: () => dispatch(homeActions.requestsRequest()),
})

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageContainer)
export default Home