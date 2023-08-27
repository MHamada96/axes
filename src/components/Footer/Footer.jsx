import React, { Component } from "react";
import "./Footer.css";
import { FaBehanceSquare, FaFacebookSquare, FaInstagram } from "react-icons/fa";

import LoGo from "../../assets/LogO.png";

export default class Footer extends Component {
    render() {
        return (
            <div className="Footer dark">
                <div className="Container">
                    <div className="icons">
                        <a
                            href="https://www.facebook.com/AxesDigitalAgency/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebookSquare className="ico" size={30} />
                        </a>
                        <a
                            href="https://www.behance.net/axesdigital"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaBehanceSquare className="ico" size={30} />
                        </a>
                        <a
                            href="https://www.instagram.com/axes_digital_agency/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram className="ico" size={30} />
                        </a>
                    </div>
                    <div className="hr">
                        <hr />
                    </div>
                    <div className="brand">
                        <img src={LoGo} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}
