import React, { Component } from "react";
import "./Welcome.style.css";
import axe from "../../../assets/axe.png";
export default class Welcom extends Component {
    render() {
        return (
            <div className="welcome">
                <div className="content">
                    <div className="hello">
                        <span className="Word1">He</span>
                        <span className="Word2">llow</span>
                    </div>
                    <img src={axe} alt="" />
                </div>
            </div>
        );
    }
}
