import React from "react";
import "./projectDetailsOverlay.style.css";
import closeIMG from "../../assets/close.png";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function ProjectDetailsOverlay(props) {
    const { title, description, images, onClose } = props;
    console.log({ title, description, images, onClose });
    // const base_url = "http://77.243.85.19:1337";
    const base_url = "https://axesdigitalagency.com/strapi"; // Set your base URL here

    return (
        <div className="overlay-container">
            <img
                src={closeIMG}
                alt={title}
                onClick={onClose}
                className="close-img"
            />
            <div className="overlay-content">
                <h1 className="title">{title}</h1>

                {/* <div className="description"></div> */}
                <ReactMarkdown>{description}</ReactMarkdown>
                <div className="image-list">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={base_url + image}
                            alt={`${title} : ${index}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
