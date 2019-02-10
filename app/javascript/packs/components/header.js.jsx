import React from 'react';
import Login from './authentication/login.js.jsx'
import Logout from './authentication/logout.js.jsx'
import Signup from './authentication/signup.js.jsx'

export default class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = { page: 'login' }
    this.changePage = this.changePage.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    var newState = state;
    if (props.currentUser == null){
      if (state.page == 'delete') {
        newState = {
          page: 'login'
        }
      }
    } else {
      newState = {
        page: "delete"
      }
    }

    return newState;
  }

  changePage(newPage) {
    this.setState({
      page: newPage
    })
  }

  render() {
    switch(this.state.page) {
      case "signup":
      return <Signup changePage={this.changePage} updateCurrentUser={this.props.updateCurrentUser}/>
      case "login":
      return <Login changePage={this.changePage} updateCurrentUser={this.props.updateCurrentUser}/>
      case "delete":
      return <Logout changePage={this.changePage} updateCurrentUser={this.props.updateCurrentUser}/>
    }
  }
}
