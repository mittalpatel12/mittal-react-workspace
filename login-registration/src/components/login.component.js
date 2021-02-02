import React, { Component } from "react";
import axios from "axios";


export default class Login extends Component {
    state = {
        email: '',
        password: ''
    
      }
    
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

  getServerData = (e) => {
        e.preventDefault();
       
        const emailParam = this.state.email;
        const passwordParam = this.state.password;
        axios.get('http://localhost:8080/users/login?email='+emailParam+'&password='+passwordParam)
            .then(response => {
                alert(response.data);
                
            })
  }
    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" onChange= {this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" onChange= {this.handleChange}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.getServerData}>Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="/">password?</a>
                </p>
            </form>
        );
    }
}