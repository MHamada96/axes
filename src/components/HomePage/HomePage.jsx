import React, { Component } from "react";
// import Welcom from "./WelcomSection/Welcom";
import "./HomePage.css";
import HelpYou from "./HelpYou/HelpYou";
import BrandsSection from "./BrandsSection/BrandsSection";
import Creative from "./CreativeSection/Creative";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import Footer from "../Footer/Footer";

import HomeHeadImage from "../../assets/axe.png";
import HeadSection from "../HeadSection/HeadSection";
import Nav from "../Navbar/Nav";

export default class HomePage extends Component {
    render() {
        return (
            <div className="homePage">
                <Nav />

                <div className="">
                    {/* <Welcom /> */}
                    <HeadSection word1="he" word2="llo" image={HomeHeadImage} />
                </div>
                <div>
                    <HelpYou />
                </div>
                <div>
                    <BrandsSection />
                </div>
                <div>
                    <Creative />
                </div>
                <div>
                    <ProjectsSection />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}
