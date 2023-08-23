import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Service.css";
export default class Service extends Component {
    render() {
        const { title, body, cat } = this.props;
        return (
            <div className="service service-container">
                <div className="title">
                    <span>{title}</span>
                </div>
                <div className="body">
                    <div className="container">
                        <span>{body}</span>
                    </div>
                    <div className="container">
                        <Link className="link" to={`/projectsView?cat=${cat}`}>
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
