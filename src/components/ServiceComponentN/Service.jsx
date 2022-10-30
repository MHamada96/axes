import React from "react";
import "./Service.style.css";
const Service = ({ imageSrc, title, subtitle, flipped, style, butStyle }) => {
  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <div className="Contnr">
            <img src={imageSrc} alt="..." className="service_image" />
            <div className="service_content Right">
              <h1 className="service_title">{title}</h1>
              <p className="service_subtitle">{subtitle}</p>
              <button className={`But Rbut ${butStyle}`}>
                Take a look at our projects
              </button>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="Contnr">
            <div className="service_content Left">
              <h1 className="service_title">{title}</h1>
              <p className="service_subtitle">{subtitle}</p>
              <button className={`But Lbut ${butStyle}`}>
                Take a look at our projects
              </button>
            </div>
            <img src={imageSrc} alt="..." className="service_image" />
          </div>
        </>
      );
    }
  };
  return <div className={`Service ${style}`}>{renderContent()}</div>;
};

export default Service;
