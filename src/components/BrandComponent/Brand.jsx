import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Brand.css";

export default class Brand extends Component {
    render() {
        return (
            <Link to="#" className="Brand">
                <img src={require("../../assets/Layer 7.png")} alt="" />
            </Link>
        );
    }
}
