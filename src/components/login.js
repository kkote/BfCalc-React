import React from "react";
import "../App.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    }


    handleSignIn(e) {
      e.preventDefault()
      let username = this.refs.username.value
      let password = this.refs.password.value
      this.props.onSignIn(username, password)
    }


  render() {
    return (
      <form onSubmit={this.handleSignIn.bind(this)}>

        <input type="text" ref="username" placeholder="Username" />
        <input type="text" ref="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>


    )
  }
}

export default Login;