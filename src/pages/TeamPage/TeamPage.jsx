import React, { Component } from "react";
import HeadSection from "../HeadSection/HeadSection";
import Nav from "../Navbar/Nav";
import "./TeamPage.style.css";
import TeamPageIamge from "../../assets/team.png";
import Footer from "../Footer/Footer";
import Team from "./Team";

export default class TeamPage extends Component {
    render() {
        return (
            <div className="TeamPage">
                <Nav />
                <HeadSection word1="Our" word2="Team" image={TeamPageIamge} />
                <div className="teamContainer">
                    <div className="container">
                        <div className="teamTitle">
                            <p>Our Creative</p>
                            <p>Team</p>
                        </div>
                        <Team className="container" />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
