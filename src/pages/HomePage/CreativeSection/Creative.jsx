import React, { Component } from "react";
import "./Creative.css";
import creative from "../../../assets/creative.png";

export default class Creative extends Component {
    render() {
        return (
            <div className="creative container">
                <img src={creative} alt="" />
            </div>
        );
    }
}
