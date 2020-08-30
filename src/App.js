import React, { Component } from 'react'
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import AuthService from './services/auth-service'
import Signup from './components/Signup/Signup'

export default class App extends Component {

  state = {
    user: null,
    loading: true
  }

  service = new AuthService()

  checkAuthenticated = () => {
    if(this.state.user === null) {
      this.service.isAuthenticated()
      .then(response => {
        this.setState({
        user: response,
        loading: false
      })
      })
      .catch( err => {
        this.setState({
          user: false,
          loading: false
        })
      })
    }
  }

  setUser = (user) => {
    this.setState({user})
  }

  render() {

    this.checkAuthenticated()

    return (
      <div>
        <Navigation user={this.state.user} setUser={this.setUser} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' render={() => <Signup setUser={this.setUser} />} />
        </Switch>
        <Footer />
      </div>
    )
  }
}