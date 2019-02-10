import React from 'react';
import axios from 'axios';

export default class Logout extends React.Component {

  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    let email = this.props.currentUser
    axios.delete('/users/sign_out', {
    })
    .then((response) => {
      this.props.changePage("login");
      this.props.updateCurrentUser(null);
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return (
      <button onClick={this.handleLogout}>Sign Out</button>
    );
  };
}
