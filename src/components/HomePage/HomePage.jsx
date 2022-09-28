import React, { Component } from "react";
import Welcom from "./WelcomSection/Welcom";
import "./HomePage.css";
import HelpYou from "./HelpYou/HelpYou";
import BrandsSection from "./BrandsSection/BrandsSection";
import Creative from "../Creative/Creative";
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
                <div>
                    <BrandsSection />
                </div>
                <div>
                    <Creative />
                </div>
            </div>
        );
    }
}
