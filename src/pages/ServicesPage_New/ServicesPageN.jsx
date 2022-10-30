import React from "react";
import "./ServicesPage.StyleN.css";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Navbar/Nav";
import ServicesNHeadImage from "../../assets/ServicesN.png";
import HeadSection from "../../components/HeadSection/HeadSection";
import Service from "../../components/ServiceComponentN/Service";
import ServiceImg1 from "../../assets/Services1.png";
import ServiceImg2 from "../../assets/Services2.png";
import ServiceImg3 from "../../assets/Services3.png";
import ServiceImg4 from "../../assets/Services4.png";
import ServiceImg5 from "../../assets/Services5.png";
import ServiceImg6 from "../../assets/Services6.png";
const ServicesPageN = () => {
  return (
    <>
      <div className="Services">
        <Nav />
        <HeadSection word1="Ser" word2="vices" image={ServicesNHeadImage} />
        <Service
          style={"WhiteService"}
          imageSrc={ServiceImg1}
          title={"Marketing"}
          subtitle={`It's not just design and advertising. there's a lot of stuff behind it.
            You should build your business on integrated marketing plans,
             all of which contribute to enhancing the visibility of your brand
              with a noticeable increase in your sales, and Axes will offer you
               that at the best prices in the market.`}
          flipped={true}
          butStyle={"BlueBut"}
        />
        <Service
          style={"BlueService"}
          imageSrc={ServiceImg2}
          title={"Branding"}
          subtitle={`If someone said to you: Do you Leave your indentity, of course you will refuse! So do not accept your brand to be without a real identity.Axes will present it to you in a special way. `}
          flipped={false}
          butStyle={"BlackBut"}
        />
        <Service
          style={"WhiteService"}
          imageSrc={ServiceImg3}
          title={"Video Production"}
          subtitle={`Many times you want to create a high quality and professional videos in order to promote your business as an enterpreneur or to engage your audience if you are a content creator, and with Axes we will provide you with the best equipment you need with a team with great experience in the field, to end up with the best video Possible form and quality.`}
          flipped={true}
          butStyle={"BlueBut"}
        />
        <Service
          style={"BlackService"}
          imageSrc={ServiceImg4}
          title={"Video Production"}
          subtitle={`what is the best time to take a photo? Yes, the best time is when Axes cameras capture it, because we offer you a distinctive set of equipment that helps to bring out the image in its full splendor and the best quality, and through which it attracts your audience. `}
          flipped={false}
          butStyle={"BlueBut"}
        />
        <Service
          style={"WhiteService"}
          imageSrc={ServiceImg5}
          title={"Websites"}
          subtitle={`If I asked you what you think about the look of your company, what do you think? Yes, in the style, the Scenery and other things, This is exactly the point that i want to reach. we do not give a free template .. We create.`}
          flipped={true}
          butStyle={"BlueBut"}
        />
        <Service
          style={"BlueService"}
          imageSrc={ServiceImg6}
          title={"Mobile Applications"}
          subtitle={`It is the field that you must have throught about or will be thinking about in the very near future.. Simply why not the next useful application is your idea? `}
          flipped={false}
          butStyle={"BlackBut"}
        />
        <Footer />
      </div>
    </>
  );
};

export default ServicesPageN;
