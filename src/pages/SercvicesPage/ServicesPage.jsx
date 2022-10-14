import React, { Component } from "react";
import ServicesHeadImage from "../../assets/our-services-image.png";
import Footer from "../Footer/Footer";
import HeadSection from "../HeadSection/HeadSection";
import HelpYou from "../HomePage/HelpYou/HelpYou";
import Nav from "../Navbar/Nav";
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
