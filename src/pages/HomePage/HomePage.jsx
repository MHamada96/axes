import React, { Component } from "react";
// import Welcom from "./WelcomSection/Welcom";
import "./HomePage.css";
import HelpYou from "./HelpYou/HelpYou";
import BrandsSection from "./BrandsSection/BrandsSection";
import Creative from "./CreativeSection/Creative";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import Footer from "../../components/Footer/Footer";

import HomeHeadImage from "../../assets/axe.png";
import HeadSection from "../../components/HeadSection/HeadSection";
import Nav from "../../components/Navbar/Nav";
import "../../index.css";

export default class HomePage extends Component {
    render() {
        return (
            <div className="homePage pageLayout">
                <Nav />
                <HeadSection word1="He" word2="llo" image={HomeHeadImage} />
                <HelpYou />
                <BrandsSection />
                <Creative />
                <ProjectsSection />
                <Footer />
            </div>
        );
    }
}
