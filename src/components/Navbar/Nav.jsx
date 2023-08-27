import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.style.css";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import svgLogo from "../../assets/AX-eeeeee.svg";

const Nav = () => {
    const [menulicked, setMenuClicked] = useState(false);
    const toggleMenuClick = () => {
        setMenuClicked(!menulicked);
    };
    const [dropclicked, setDropClicked] = useState(false);
    const toggleDropClick = () => {
        setDropClicked(!dropclicked);
    };
    return (
        <div className="navbar">
            <div className="container">
                <div className="nav-brand">
                    <div>
                        <img
                            src={svgLogo}
                            alt="Axes SVG logo"
                            className="logo-svg"
                        ></img>
                    </div>
                    <div className="logo-title">
                        <h5 className="title1">axes digitial</h5>
                        <h6 className="title2">agency</h6>
                    </div>
                </div>
                {menulicked ? (
                    <FiMenu
                        size={25}
                        className="navbarMenu__Icon"
                        onClick={toggleMenuClick}
                    />
                ) : (
                    <FiX
                        size={25}
                        className="navbarMenu__Icon"
                        onClick={toggleMenuClick}
                    />
                )}

                {dropclicked ? (
                    <FiChevronUp
                        size={25}
                        className="navbarDrop__Icon"
                        onClick={toggleDropClick}
                    />
                ) : (
                    <FiChevronDown
                        size={25}
                        className="navbarDrop__Icon"
                        onClick={toggleDropClick}
                    />
                )}
                <div
                    className={
                        menulicked
                            ? "navbar__list"
                            : "navbar__list navbar__list--active"
                    }
                >
                    <div className="LogoList">
                        {" "}
                        <img src={svgLogo} alt="" className="logo-svg" />
                    </div>

                    <Link className="navItem" to="/Home">
                        Home
                    </Link>
                    <Link className="navItem" to="/Work">
                        Work
                    </Link>
                    <Link className="navItem" to="/Clients">
                        Clients
                    </Link>
                    <Link className="navItem" to="/Services">
                        Services
                    </Link>
                    <Link className="navItem" to="/Ourteam">
                        Our team
                    </Link>
                    <Link className="navItem" to="/contact-us">
                        Contact Us
                    </Link>
                    <Link className="navItem lastOne" to="/about-us">
                        About Us
                    </Link>
                </div>
            </div>
            <div className="container2">
                <div
                    className={
                        dropclicked
                            ? "navbar__drop"
                            : "navbar__drop navbar__dropNone"
                    }
                >
                    <Link className="navItem" to="/Home">
                        Home
                    </Link>
                    <Link className="navItem" to="/Work">
                        Work
                    </Link>
                    <Link className="navItem" to="/Clients">
                        Clients
                    </Link>
                    <Link className="navItem" to="/Services">
                        Services
                    </Link>
                    <Link className="navItem" to="/Ourteam">
                        Our team
                    </Link>
                    <Link className="navItem" to="/contact-us">
                        Contact Us
                    </Link>
                    <Link className="navItem lastOne" to="/about-us">
                        About Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;
