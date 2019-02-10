import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from './header.js.jsx'
import Body from './body.js.jsx'

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      currentUser: null
    }
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  componentDidMount(){
    axios.get('/api/v1/users/check_for_user',{
    })
    .then((response) => {
      if(response.data.email){
        this.setState({
          currentUser: response.data.email
        })
      } else {
        this.setState({
          currentUser: null
        })
      }
    })
    .catch(function(error){
      console.log(error);
    })
  }

  updateCurrentUser(email) {
    this.setState({
      currentUser: email
    })
  }

  render(){
    let body = <div></div>;
    if(this.state.currentUser != null) {
      body = <Body />
    }
    return (
      <div>
      <Header updateCurrentUser={this.updateCurrentUser} currentUser={this.state.currentUser}/>
      {body}
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
