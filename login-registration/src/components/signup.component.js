import React, { Component } from "react";
import axios from 'axios';

export default class SignUp extends Component {

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
      }

      handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
      }

     sendDetailsToServer = (e) => {
        e.preventDefault();
            const payload = {
                "email":this.state.email,
                "password":this.state.password,
                "firstName":this.state.firstName,
                "lastName":this.state.lastName
            };

            const jsonPayload = JSON.stringify(payload);
            axios.post(`http://localhost:8080/users/save`, jsonPayload, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
              console.log(res);
              console.log(res.data);
            })
            .catch(function (error) {
                console.log(error);
            })
        
    }


    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" name="firstName" className="form-control" placeholder="First name" onChange= {this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" name="lastName" className="form-control" placeholder="Last name" onChange= {this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter email" onChange= {this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" onChange= {this.handleChange} />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.sendDetailsToServer}>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/">sign in?</a>
                </p>
            </form>
        );
    }
}