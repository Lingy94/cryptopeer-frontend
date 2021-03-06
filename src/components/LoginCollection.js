import React, { Component } from 'react'
import Login from './Login'
import Signup from './Signup'
import '../styling/App.css'

class LoginCollection extends Component {

  state = {
      hasAccount: true,
      existingUser: {
          username: null,
          password: null
      },
      newUser: {
          username: null,
          password: null,
          email: null,
          firstname: null,
          lastname: null,
          imgUrl: null,
      }
  }

  toggleLogin = () => {
      this.setState({
          hasAccount: !this.state.hasAccount
      })
  }

  handleSubmit = event => {
      event.preventDefault()
      event.persist()
      if (this.state.hasAccount)
          {this.props.login(this.state.existingUser.username, this.state.existingUser.password)
          }
      else {
          this.props.signup(this.state.newUser.username, this.state.newUser.password, this.state.newUser.email, this.state.newUser.firstname, this.state.newUser.lastname, this.state.newUser.imgUrl)
      }
  }

  handleChange = (event) => {
    event.persist()
    if (this.state.hasAccount) {
        let newState = {...this.state.existingUser}
        newState[event.target.name] = event.target.value
        this.setState({ existingUser: newState })
    }
    else {
        let newState = {...this.state.newUser}
        newState[event.target.name] = event.target.value
        this.setState({
           newUser: newState
        })
    }
  }

  render() {
    if (this.state.hasAccount) {
      return(
          <Login handleChange={this.handleChange} logininfo={this.state} toggleLogin={this.toggleLogin} login={this.handleSubmit}/>
      )
    }
    else {
      return(
          <Signup handleChange={this.handleChange} signupinfo={this.state.newUser} toggleLogin={this.toggleLogin} signup={this.handleSubmit} />
      )
    }
  }
}

export default LoginCollection
