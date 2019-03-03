import React from 'react';
import axios from 'axios';

export default class Login extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      error: null
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    axios.post('/users/sign_in', {
      user: {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
      }
    })
    .then((response)=> {
      this.props.changePage("delete");
      if (response.data.email != null){
        this.props.updateCurrentUser(response.data.email);
      } else {
        this.setState({
          error: "Incorrect details"
        })
      }
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

    if (this.state.error != null) {
      var error = this.state.error
    }

    return (
      <div style={divStyleAll}>
        <h2>Login</h2>
        <form>
          <div style={divStyle}>
            {error}
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
