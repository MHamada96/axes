import React, { Component } from "react";
import "./ContactUsPage.style.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import HeadSection from "../../components/HeadSection/HeadSection";
import ContactUsPageImage from "../../assets/std-headers-compressed/contact-US-std.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faFacebookMessenger,
    faInstagram,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default class ContactUsPage extends Component {
    render() {
        return (
            <div className="ContactUsPage">
                <Nav className="dark" />
                <HeadSection
                    word1="GET in"
                    word2="touch"
                    image={ContactUsPageImage}
                    className="dark"
                />
                <h3 className="contact-us-heading">
                    تواصل معنا عبر منصات التواصل الاجتماعي
                </h3>
                <div className="social">
                    <div className="social-container">
                        <a
                            href="https://www.facebook.com/AxesDigitalAgency/"
                            className="facebook social"
                        >
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a
                            href="http://m.me/AxesDigitalAgency"
                            className="messenger social"
                        >
                            <FontAwesomeIcon icon={faFacebookMessenger} />
                        </a>
                        <a
                            href="https://www.instagram.com/axes_digital_agency"
                            className="instagram social"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a
                            href="https://wa.me/201028396252"
                            className="whatsapp social"
                        >
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </div>
                </div>

                <div className="location">
                    <h5 className="contact-us-address">
                        العنوان: شقة 204 برج (ب)ابراج الزرعين- ميدان سيتى الاول
                    </h5>
                    <iframe
                        title="Location"
                        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3549.156233471954!2d31.173901!3d27.182826!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDEwJzU4LjIiTiAzMcKwMTAnMzUuMyJF!5e0!3m2!1sen!2seg!4v1692451094598!5m2!1sen!2seg"
                        width="600"
                        height="450"
                        style={{ border: "0" }}
                        loading="lazy"
                    ></iframe>
                </div>
                <Footer />
            </div>
        );
    }
}
