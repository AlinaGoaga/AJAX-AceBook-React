import React from 'react';

export default class Login extends React.Component {

  constructor(props){
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(e) {
    e.preventDefault();
    let that = this
    axios.post('/users', {
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
    return (
      <div>
      <h2>Login</h2>
      <form>
      <input id="email" placeholder="email"/>
      <input id="password" placeholder="password"/>
      <button onClick={this.handleLogin}>Submit</button>
      </form>
      <button onClick={() => this.props.changePage("signup")}>Back to Signup</button>
      </div>
    );
  };
};
