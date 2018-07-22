import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import LoginComponent from '../components/LoginComponent'

import * as Actions from '../api/AuthApi'

const Login = ({api, messages}) => (
  <div>
    <LoginComponent messages={messages} loginUser={api.loginUser} />
  </div>
)

Login.propTypes = {
  api: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  messages: []
})

const mapDispatchToProps = dispatch => ({
  api: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)