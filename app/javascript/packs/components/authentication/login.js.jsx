import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {

  constructor(props){
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    let that = this
    axios.post('/users/sign_in', {
      user: {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
      }
    })
    .then(function(response){
      that.props.changePage("delete");
      that.props.updateCurrentUser(email);
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
      <h2>Login</h2>
      <form>
          <div style={divStyle}>
            <input id="email" placeholder="email"/>
            <input id="password" placeholder="password"/>
            <button onClick={this.handleLogin}>Submit</button>
          </div>
      </form>
      <button onClick={() => this.props.changePage("signup")}>Back to Signup</button>
      </div>
    );
  };
};
