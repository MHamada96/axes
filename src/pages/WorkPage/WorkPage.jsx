import React, { Component } from "react";
import HeadSection from "../HeadSection/HeadSection";
import Nav from "../Navbar/Nav";
import "./WorkPage.style.css";
import WorkPageHeadImage from "../../assets/lamp.png";
import Footer from "../Footer/Footer";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import Creative from "../HomePage/CreativeSection/Creative";
export default class WorkPage extends Component {
    render() {
        return (
            <div className="WorkPage">
                <Nav />
                <HeadSection
                    word1="Our"
                    word2="works"
                    image={WorkPageHeadImage}
                />
                <ProjectsSection />
                <Creative />
                <div className="space"></div>
                <Footer />
            </div>
        );
    }
}
