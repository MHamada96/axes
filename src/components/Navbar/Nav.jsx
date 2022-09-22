import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.style.css";
import logo from "../../assets/logo1.png";
import logoName from "../../assets/axes digital agency.png";
export default class Nav extends Component {
    render() {
        return (
            <div className="container">
                <div className="navbar">
                    <div className="brand">
                        <img src={logo} alt="" />
                        <img src={logoName} alt="" />
                    </div>
                    <div className="navLinks">
                        <Link to="/Home">Home</Link>
                        <Link to="/Work">Work</Link>
                        <Link to="/Clients">Clients</Link>
                        <Link to="/Services">Services</Link>
                        <Link to="/Contact-us">Contact Us</Link>
                        <Link to="/About-us">About Us</Link>
                        <Link to="/Ourteam">Our team</Link>
                    </div>
                </div>
            </div>
        );
    }
}
