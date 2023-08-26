import React, { Component } from "react";
import ServicesHeadImage from "../../assets/std-headers-compressed/updated-services-0-head-pic0-std.png";
import Footer from "../../components/Footer/Footer";
import HeadSection from "../../components/HeadSection/HeadSection";
import HelpYou from "../HomePage/HelpYou/HelpYou";
import Nav from "../../components/Navbar/Nav";
import "./ServicesPage.Style.css";
export default class ServicesPage extends Component {
    render() {
        return (
            <div className="servicesPage">
                <Nav />
                <HeadSection
                    word1="Our"
                    word2="Services"
                    image={ServicesHeadImage}
                />
                <HelpYou />
                <Footer />
            </div>
        );
    }
}
