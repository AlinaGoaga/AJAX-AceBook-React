import React from 'react';
import Login from './authentication/login.js.jsx'
import Logout from './authentication/logout.js.jsx'
import Signup from './authentication/signup.js.jsx'

export default class Header extends React.Component {

  constructor(props){
    super(props);
    if (this.props.currentUser == null){
      this.state = {
        page:"login"
      }
    } else{
      this.state = {
        page: "delete"
      }
    }
    this.changePage = this.changePage.bind(this);
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
