import React from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage'
import NotFoundPage from './components/NotFoundPage'
import LoginPage from './components/login/LoginPage'
import GamesPage from './components/games/GamesPage'
import TopBar from './components/layout/TopBar'
import PrivateRoute from './components/router/PrivateRoute'
import RouteWithProps from './components/router/RouteWithProps'
import * as authentication from './services/authentication'
import '../node_modules/picnic/picnic.min.css'
import './App.css'
import Znamenitost from './components/about/Znamenitosti/Znamenitost'
import Kalemegdan from './components/about/Znamenitosti/Kalemegdan'
import Ada from './components/about/Znamenitosti/Ada'
import Svpetka from './components/about/Znamenitosti/Svpetka'
import Topcider from './components/about/Znamenitosti/Topcider'
import Tabela from './components/about/Znamenitosti/Komponente/Tabela'

class App extends React.Component {
  constructor () {
    super()

    let authState = authentication.getAuthState()
    this.state = {
      auth: {
        loggedIn: authState.userToken !== null,
        username: authState.username,
        userToken: authState.userToken,
        role: authState.role
      }
    }

    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  getChildContext () {
    return {
      auth: {
        loggedIn: this.state.auth.loggedIn,
        username: this.state.auth.username,
        userToken: this.state.auth.userToken,
        role: this.state.auth.role
      }
    }
  }

  login (username, password) {
    return authentication.login(username, password)
        .then(result => {
          this.setState({
            auth: {
              ...this.state.auth,
              loggedIn: true,
              username: result.username,
              userToken: result.userToken,
              role: result.role
            }
          })
        })
        .catch(err => {
          this._logout()
          return Promise.reject(err)
        })
  }

  logout () {
    return authentication.logout().then(result => {
      this._logout()
    })
  }

  render () {
    return (
      <Router>
        <div>
          <TopBar logout={this.logout} />
          <div className='mainbody'>
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route exact path='/about' component={AboutPage} />
              <RouteWithProps path='/login' component={LoginPage} props={{ login: this.login }} />
              <RouteWithProps path='/notloggedin' component={LoginPage} props={{ login: this.login }} />
              <PrivateRoute path='/utakmice' component={GamesPage} />
              <Route path='/znamenitost' exact component={Znamenitost} />
              <Route path='/kalemegdan' exact component={Kalemegdan} />
              <Route path='/svpetka' exact component={Svpetka} />
              <Route path='/ada' exact component={Ada} />
              <Route path='/topcider' exact component={Topcider} />
              <Route path='/tabela' exact component={Tabela} />
              <Route component={NotFoundPage} />

            </Switch>
          </div>
        </div>
      </Router>
    )
  }

  _logout () {
    this.setState({
      auth: {
        ...this.state.auth,
        loggedIn: false,
        username: null,
        userToken: null,
        role: null
      }
    })
  }

}

App.childContextTypes = {
  auth: PropTypes.shape({
    loggedIn: PropTypes.bool,
    username: PropTypes.string,
    userToken: PropTypes.string,
    role: PropTypes.string
  })
}

export default App
