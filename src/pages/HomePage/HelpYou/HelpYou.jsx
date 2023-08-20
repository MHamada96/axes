import React, { Component } from "react";

import "./HelpYou.css";
import "../../../index.css";

import ServiceList from "./ServiceList";

export default class HelpYou extends Component {
    render() {
        return (
            <div className="HelpYou">
                <div className="sectionTitle">
                    <div className="rect"></div>
                    <div className="title">
                        <h1>We can Help you alot</h1>
                        <h1>with your ...</h1>
                    </div>
                </div>
                <ServiceList />
            </div>
        );
    }
}
