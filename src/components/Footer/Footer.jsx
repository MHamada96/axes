import React, { Component } from "react";
import "./Footer.css";
import {
    FaBehanceSquare,
    FaFacebookSquare,
    FaInstagram,
    FaLinkedin,
    FaVimeoV,
    FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/logo1.png";
import logoName from "../../assets/axes digital agency.png";
import LoGo from "../../assets/LogO.png";

export default class Footer extends Component {
    render() {
        return (
            <div className="Footer dark">
                <div className="Container">
                    <div className="icons">
                        <FaFacebookSquare className="ico" size={30} />
                        <FaBehanceSquare className="ico" size={30} />
                        <FaLinkedin className="ico" size={30} />
                        <FaInstagram className="ico" size={30} />
                        <FaYoutube className="ico" size={30} />
                        <FaVimeoV className="ico" size={30} />
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
