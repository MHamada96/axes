import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Service.css";
export default class Service extends Component {
    render() {
        const { title, body } = this.props;
        return (
            <div className="service">
                <div className="title">
                    <span>{title}</span>
                </div>
                <div className="body">
                    <div className="container">
                        <span>{body}</span>
                    </div>
                    <div className="container">
                        <Link className="link" to="#">
                            Learn more
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
