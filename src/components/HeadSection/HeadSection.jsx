import React, { Component } from "react";
import "./HeadSection.css";
export default class HeadSection extends Component {
    render() {
        const { word1, word2, image } = this.props;
        return (
            <div className="head-section-dark-mode">
                <div className="Head head-section-container">
                    <div className="content">
                        <div className="hello">
                            <span className="Word1">{word1}</span>
                            <span className="Word2">{word2}</span>
                            <div className="blue-square"></div>
                        </div>
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}
