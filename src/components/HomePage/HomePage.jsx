import React, { Component } from "react";
import Welcom from "./WelcomSection/Welcom";
import "./HomePage.css";
import HelpYou from "./HelpYou/HelpYou";
export default class HomePage extends Component {
    render() {
        return (
            <div className="homePage">
                <div className="container">
                    <Welcom />
                </div>
                <div>
                    <HelpYou />
                </div>
            </div>
        );
    }
}
