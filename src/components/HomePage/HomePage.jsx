import React, { Component } from "react";
import Welcom from "./WelcomSection/Welcom";
import "./HomePage.css";
export default class HomePage extends Component {
    render() {
        return (
            <div className="homePage">
                <div className="container">
                    <Welcom />
                </div>
            </div>
        );
    }
}
