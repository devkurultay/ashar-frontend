import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TermDetails from './term-details'
import * as homeActions from '../home-page/actions'

class TermDetailsContainer extends Component {

  componentDidMount() {
    const { match: { params: { id} } } = this.props
    this.props.getTermRequest(id)
  }

  render() {
    const { match: { params: { id} } } = this.props
    return <TermDetails requests={this.props.requests} id={id} />
  }
}

const mapStateToProps = state => {
  return {
    requests: state.home.requests
  }
}

const mapDispatchToProps = dispatch => ({
    getTermRequest: (id) => dispatch(homeActions.getTermRequest(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TermDetailsContainer))