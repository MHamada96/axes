import React from "react";
import { Link } from "react-router-dom";
import "./servicesSection.style.css";

export default function ServicesSection(props) {
    const {
        title,
        description,
        imgSrc,
        linkTo,
        rtlFlag,
        bgColor,
        fColor,
        btnBg,
    } = props;

    const containerStyles = {
        flexDirection: rtlFlag ? "row-reverse" : "row",
    };
    console.log(linkTo);
    return (
        <div
            className="ServiceSection-container"
            style={{ backgroundColor: bgColor || "white", color: fColor }}
        >
            <div className="content" style={containerStyles}>
                <div className="text-container">
                    <h2
                        style={
                            rtlFlag
                                ? {
                                      direction: "rtl",
                                  }
                                : {}
                        }
                    >
                        {title}
                    </h2>
                    <p
                        style={
                            rtlFlag
                                ? {
                                      direction: "rtl",
                                  }
                                : {}
                        }
                    >
                        {description}
                    </p>
                    <div
                        style={
                            rtlFlag
                                ? {
                                      display: "flex",
                                      flexDirection: "row",
                                      justifyContent: "end",
                                  }
                                : {}
                        }
                    >
                        <Link
                            className="LinkTo"
                            style={{
                                backgroundColor: btnBg || "red",
                            }}
                            to={linkTo}
                        >
                            Take a Look at our projects
                        </Link>
                    </div>
                </div>
                <div className="img-container">
                    <img src={imgSrc} alt={title} />
                </div>
            </div>
        </div>
    );
}
