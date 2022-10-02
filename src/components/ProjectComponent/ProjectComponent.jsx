import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProjectComponent.css";
export default class ProjectComponent extends Component {
    render() {
        return (
            <div className="ProjectComponent container">
                <span className="title">Jo Lion Project</span>
                <Link to="#" className="link">
                    Social Media Project
                </Link>
            </div>
        );
    }
}
