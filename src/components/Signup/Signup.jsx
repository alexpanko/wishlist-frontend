import React, { Component } from 'react'
import './Signup.css'
import AuthService from '../../services/auth-service'
import {Redirect} from 'react-router-dom'
import { Link } from 'react-router-dom'


export default class Signup extends Component {

    state = {
            username: '',
            password: '',
            service: new AuthService(),
            submitted: false
    }

     handleSubmit = (e) => {
        e.preventDefault();
        this.state.service.signup(this.state.username, this.state.password)
        .then(user => {
          this.setState({submitted: true})
          this.props.setUser(user);
        })
    }

    handleInput = (e) => {
        let {name, value} = e.target;
        this.setState({[name]: value})
    }

    render() {

      if(this.state.submitted) {
        return <Redirect to='/' />
      }
        return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <h1 className="text-center">Create a New Account</h1>
                        <p className="text-center">Create a new account to start making your wish lists. Already have one? 
                            <span> </span>  
                            <Link className="" to="/login">Login here</Link>
                        </p> 
                    </div>
                    <div className="col-lg-2"></div>
                </div>
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <div className="text-center">
                            <Link className="btn btn-info mt-3 myWidth-300" to="/google"><i className="fab fa-google mr-3 font-weight-bold"></i>Sign up with Google</Link>
                            <br />
                            <Link className="btn btn-info my-3 myWidth-300" to="/facebook"><i className="fab fa-facebook-f mr-3 font-weight-bold"></i>Sign up with Facebook</Link>
                        </div> 
                        <div className="hr-text text-center">
                            <hr />
                            <span className="bg-white text-secondary font-italic px-2">or...</span>
                        </div>
                        <form className="mt-3 d-flex flex-column align-items-center" onSubmit={(e) => this.handleSubmit(e)}>
                            <div className="form-group">
                                <label htmlFor="username">Email address:</label>
                                <input 
                                    type="email" 
                                    className="form-control myWidth-300" 
                                    name="username" 
                                    value={this.state.username} 
                                    placeholder="Enter email"
                                    onChange={(e) => this.handleInput(e)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input 
                                    type="password" 
                                    className="form-control myWidth-300" 
                                    name="password" 
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={(e) => this.handleInput(e)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary myWidth-300">Sign Up</button>
                        </form>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        );
    }
}