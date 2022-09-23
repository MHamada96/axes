import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.style.css";
import logo from "../../assets/logo1.png";
import logoName from "../../assets/axes digital agency.png";
export default class Nav extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="container">
                    <div className="brand">
                        <img src={logo} alt="" />
                        <img src={logoName} alt="" />
                    </div>
                    <div className="navLinks">
                        <Link className="navItem" to="/Home">
                            Home
                        </Link>
                        <Link className="navItem" to="/Work">
                            Work
                        </Link>
                        <Link className="navItem" to="/Clients">
                            Clients
                        </Link>
                        <Link className="navItem" to="/Services">
                            Services
                        </Link>
                        <Link className="navItem" to="/Contact-us">
                            Contact Us
                        </Link>
                        <Link className="navItem" to="/About-us">
                            About Us
                        </Link>
                        <Link className="navItem" to="/Ourteam">
                            Our team
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
