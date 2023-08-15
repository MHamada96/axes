import React, { Component } from "react";
import "./AboutUsPage.style.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";

export default class AboutUsPage extends Component {
    render() {
        return (
            <div className="AboutUsPage">
                <Nav />
                <h1>About Us Page</h1>
                <Footer />
            </div>
        );
    }
}
