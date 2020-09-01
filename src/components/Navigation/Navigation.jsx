import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import AuthService from "../../services/auth-service";
//import Home from '../Home/Home';
//import { Route, Link, Switch, Redirect } from 'react-router-dom'
import "./Navigation.css";


export default class Navigation extends Component {

    service = new AuthService();

    logoutUser = () => {
        this.service.logout().then(() => {
          this.props.setUser({});
        });
    };


    render() {
        return (
            <div>
                <Navbar bg="white" expand="lg">
                    <Navbar.Brand className="myLogo pr-5" href="/">WISHLIST LAB</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link className="myNavLink" href="/">Home</Nav.Link>
                            {!this.props.user && <Nav.Link className="myNavLink" href="/signup">Sign Up</Nav.Link>}
                            {!this.props.user && <Nav.Link className="myNavLink" href="/login">Login</Nav.Link>}
                            {this.props.user && <Nav.Link className="myNavLink" href="/create-list">Create list</Nav.Link>}
                            {this.props.user && <Nav.Link className="myNavLink" href="/my-lists">My lists</Nav.Link>}
                            {this.props.user && <Nav.Link href="/">
                                <button className="myNavLink btn btn-link myLogoutButton" onClick={() => this.logoutUser()}>Logout</button>
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}


