import React, { Component } from "react";
import HeadSection from "../../components/HeadSection/HeadSection";
import Nav from "../../components/Navbar/Nav";
import "./ClientsPage.style.css";
import ClientsHeadImage from "../../assets/man.png";
import BrandsSection from "../HomePage/BrandsSection/BrandsSection";
import Footer from "../../components/Footer/Footer";

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
