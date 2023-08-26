import React from "react";
import "./services.style.module.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import HeadSection from "../../components/HeadSection/HeadSection";
import ServicesHeadImage from "../../assets/std-headers-compressed/updated-services-0-head-pic0-std.png";
import ServicesSection from "../../components/ServicesSection/ServicesSection";
import MarketingImg from "../../assets/Services-Marketing.png";
import BrandingImg from "../../assets/Services-Branding.png";
import VideoImg1 from "../../assets/Services-Video.png";
import VideoImg2 from "../../assets/Services-video-2.png";
import websiteImg from "../../assets/Services-web.png";
import mobileImg from "../../assets/Services-moible.png";

export default function ServicesUpdated() {
    return (
        <div className="updated-service-container">
            <Nav />
            <HeadSection
                word1="Our"
                word2="Services"
                image={ServicesHeadImage}
            />
            <div className="service-list-content-container">
                <ServicesSection
                    className="ServiceSection"
                    title="Marketing"
                    description="It's not just design and advertising, there's a Lot of stuff behind it. You should build your business on integrated marketing plans, all of which contribute to enhancing the visibility of your brand with a noticeable increase in your sales, and Axes will offer you that at the best prices in the market."
                    imgSrc={MarketingImg}
                    linkTo={`/projectsView?cat=OnlineMarketing`}
                    bgColor="white"
                    fColor="black"
                    btnBg="#0056ff"
                ></ServicesSection>

                <ServicesSection
                    className="ServiceSection"
                    title="Branding"
                    description="If someone said to you: Do you Leave your identity, of course you will refuse ! So do not accept your brand to be without a real identity. Axes will present it to you in a special way."
                    imgSrc={BrandingImg}
                    linkTo={`/projectsView?cat=Branding`}
                    rtlFlag={true}
                    bgColor="#0056ff"
                    fColor="white"
                    btnBg="black"
                ></ServicesSection>

                <ServicesSection
                    className="ServiceSection"
                    title="Video Production"
                    description="Many times you want to create a high quality and pro- fessional videos in order to promote your business as an entrepreneur or to engage your audience if you are a content creator, and with Axes we will provide you with the best equipment you need with a team with great experience in the field, to end up with the best video Possible form and quality."
                    imgSrc={VideoImg1}
                    linkTo={`/projectsView?cat=VideoProduction`}
                    bgColor="white"
                    fColor="black"
                    btnBg="#0056ff"
                ></ServicesSection>

                <ServicesSection
                    className="ServiceSection"
                    title="Video Production"
                    description="What is the best time to take a photo? Yes, the best time is when Axes cameras capture it, because we offer you a distinctive set of equipment that helps to bring out the image in its full splendor and the best quality, and through which it attracts your audience."
                    imgSrc={VideoImg2}
                    linkTo={`/projectsView?cat=VideoProduction`}
                    rtlFlag={true}
                    bgColor="black"
                    fColor="white"
                    btnBg="#0056ff"
                ></ServicesSection>

                <ServicesSection
                    className="ServiceSection"
                    title="Websites"
                    description="If I asked you what you think about the look of your company, what do you think? Yes, in the style , the Scenery and other things, This is exactly the point that I want to reach. We do not give a free template .. We create."
                    imgSrc={websiteImg}
                    linkTo={`/projectsView?cat=WebDevelopment`}
                    bgColor="white"
                    fColor="black"
                    btnBg="#0056ff"
                ></ServicesSection>

                <ServicesSection
                    className="ServiceSection"
                    title="Mobile Applications"
                    description="It is the field that you must have thought about or will be thinking about in the very near future.. Simply why not the next useful application is your idea?"
                    imgSrc={mobileImg}
                    linkTo={`/projectsView?cat=DesktopMobileDevelopment`}
                    rtlFlag={true}
                    bgColor="#0056ff"
                    fColor="white"
                    btnBg="black"
                ></ServicesSection>
            </div>
            <Footer />
        </div>
    );
}
