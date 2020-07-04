import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router'
import LoginForm from './LoginForm'

class LoginPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      redirectToReferrer: false
    }
    this.loginToApi = this.loginToApi.bind(this)
  }

  loginToApi (username, password) {
    return this.props.login(username, password)
               .then(() => this.setState({ redirectToReferrer: true }))
  }

  render () {
    const { from } = this.props.location.state || '/'
    const { redirectToReferrer } = this.state

    return (
      <div>
        {redirectToReferrer && (
          <Redirect to={from || '/'} />
        )}
        {from && (
          <center><p>
            Uloguj se da bi video <b>utakmice</b>
            {/* <code>{from.pathname}</code> */}
          </p></center>
        )}
        {this.context.auth.loggedIn ? (
          <p>
           Vec si ulogovan
          </p>
        ) : (
          <LoginForm login={this.loginToApi} />
        )}
      </div>
    )
  };
}

LoginPage.contextTypes = {
  auth: PropTypes.object
}

LoginPage.propTypes = {
  login: PropTypes.func
}

export default LoginPage
