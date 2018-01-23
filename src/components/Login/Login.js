import React, { Component} from "react";
import "./Login.css";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import picture from "./login12.jpg";
import {Link} from "react-router-dom";



// const Login = props => {
//     return(
//         <div className="form-group">
//             Login Page Reached
//         </div>
//     );
// };

//export default 
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
     
      <div className="" >
      <Link className="home" to="/">Home</Link>
      <div className="Login" >
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="medium">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="medium">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button className="btn btn-success"
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            
          >
            Login
          </Button>
        </form>
        </div>
      </div>
    );
  }
}
export default Login;


