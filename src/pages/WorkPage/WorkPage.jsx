import React, { Component } from "react";
import HeadSection from "../../components/HeadSection/HeadSection";
import Nav from "../../components/Navbar/Nav";
import "./WorkPage.style.css";
import WorkPageHeadImage from "../../assets/std-headers-compressed/lamp-std.png";
import Footer from "../../components/Footer/Footer";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
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
