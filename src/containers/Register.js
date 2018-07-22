import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import RegisterComponent from '../components/RegisterComponent'

import * as Actions from '../api/AuthApi'

const Register = ({api, messages}) => (
  <div>
    <RegisterComponent messages={messages} registerUser={api.registerUser} />
  </div>
)

Register.propTypes = {
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
)(Register)