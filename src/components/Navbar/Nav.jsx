import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.style.css";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo1.png";
import logoName from "../../assets/axes digital agency.png";
import LoGo from "../../assets/LogO.png";
const Nav = () => {
  const [menulicked, setMenuClicked] = useState(false);
  const toggleMenuClick = () => {
    setMenuClicked(!menulicked);
  };
  return (
    <div className="navbar">
      <div className="brand">
        {/*  <img src={logo} alt="" />
        <img src={logoName} alt="" /> */}
        <img src={LoGo} alt="" />
      </div>
      {menulicked ? (
        <FiMenu
          size={25}
          className="navbarMenu__Icon"
          onClick={toggleMenuClick}
        />
      ) : (
        <FiX size={25} className="navbarMenu__Icon" onClick={toggleMenuClick} />
      )}
      <div
        className={
          menulicked ? "navbar__list" : "navbar__list navbar__list--active"
        }
      >
        <div className="LogoList">
          {" "}
          <img src={logo} alt="" />
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
        <Link className="navItem" to="/#">
          Contact Us
        </Link>
        <Link className="navItem lastOne" to="/#">
          About Us
        </Link>
      </div>
    </div>
  );
};

export default Nav;
