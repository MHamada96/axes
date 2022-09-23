import React, { Component } from "react";
import "./Welcome.style.css";
import axe from "../../../assets/axe.png";
export default class Welcom extends Component {
    render() {
        return (
            <div className="welcome">
                <div className="content">
                    <div className="hello">
                        <span className="He">He</span>
                        <span className="llo">llow</span>
                    </div>
                    <img src={axe} alt="" />
                </div>
            </div>
        );
    }
}
