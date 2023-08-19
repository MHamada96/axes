import React, { Component } from "react";
import "./AboutUsPage.style.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import HeadSection from "../../components/HeadSection/HeadSection";
import AboutImage from "../../assets/about-us.png";
import assetsimage1 from "../../assets/pngwing.com.png";
import { Link } from "react-router-dom";
export default class AboutUsPage extends Component {
    render() {
        return (
            <div className="AboutUsPage">
                <Nav className="dark" />
                <HeadSection
                    word1="who WE"
                    word2="are"
                    image={AboutImage}
                    className="dark"
                />
                <p className="about-content">
                    شركة رائدة فى مجال التسويق الرقمى(Digital marketing) فى صعيد
                    مصر .. نعمل كفريق منذ عام 2018 فى مجال التسويق عبر وسائل
                    التواصل الاجتماعي (Social Media Marketing) على كافة منصات
                    التواصل الاجتماعى كـ فيسبوك و انستجرام و سناب و يوتيوب و
                    تويتر ..الخ تم تطويرالعمل وتأسيس أول كيان تسويقى متكامل فى
                    الصعيد عام 2020 مع إضافة خدمات إضافية كالبرمجة وتصميم
                    المواقع والمطبوعات؛ لنقدم لعملائنا كافة خدمات التسويق
                    والبرمجة التى يحتاجها العميل فى مصر والخليج لدينا سابقة
                    اعمال ضخمة فى مصر فى (القاهره وأسيوط والمنيا وسوهاج) كما
                    شرفنا بالعمل لعملاء فى الاردن والسعوديه والكويت والإمارات
                    وعمان. نتميز بقدرتنا كفريق على بناء حملات تسويقية متكاملة
                    وبناء الهوية البصرية وتصميم الفيديو بأعلى درجات الاحترافية
                </p>
                <div className="img-container ">
                    <img src={assetsimage1} alt=""></img>
                </div>
                <div className="buttons-section">
                    <div className="container">
                        <Link to="/Services">
                            <button>خدماتنا</button>
                        </Link>
                        <Link to="/contact-us">
                            <button>تواصل معنا</button>
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
