import React from 'react';
import axios from 'axios';

export default class Signup extends React.Component {

  constructor(props){
    super(props);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup(e) {
    e.preventDefault();
    axios.post('/users', {
      user: {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        password_confirmation: document.getElementById("password_confirmation").value
      }
    })
    .then((response) => {
      this.props.changePage("delete");
      this.props.updateCurrentUser(email);
    })
    .catch(function(error){
      console.log(error)
    })
  }

  render() {

    var divStyleAll= {
      background: "#eee",
      padding: "50px",
      margin: "20px",
      width: "60%"
    }

    var divStyle = {
      padding: "25px"
    };

    return (
      <div style={divStyleAll}>
      <h2>Signup</h2>
      <form>
        <div style={divStyle}>
          <input id="email" placeholder="email"/>
          <input id="password" placeholder="password"/>
          <input id="password_confirmation" placeholder="retype password"/>
          <button onClick={this.handleSignup}>Submit</button>
        </div>
      </form>
      <button onClick={() => this.props.changePage("login")}>Back to Login</button>
      </div>
    );
  };
};
