import React, { Component } from "react";
import HeadSection from "../HeadSection/HeadSection";
import Nav from "../Navbar/Nav";
import "./ClientsPage.style.css";
import ClientsHeadImage from "../../assets/man.png";
import BrandsSection from "../HomePage/BrandsSection/BrandsSection";
import Footer from "../Footer/Footer";

export default class ClientsPage extends Component {
    render() {
        return (
            <div className="ClientsPage">
                <Nav />
                <HeadSection
                    word1="Our"
                    word2="Cleints"
                    image={ClientsHeadImage}
                />
                <BrandsSection />
                <Footer />
            </div>
        );
    }
}
