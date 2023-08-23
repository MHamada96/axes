import React from "react";
import "./projectDetailsOverlay.style.module.css";
import closeIMG from "../../assets/close.png";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function ProjectDetailsOverlay(props) {
    const { title, description, images, onClose } = props;
    console.log({ title, description, images, onClose });

    return (
        <div className="overlay-container">
            {/* <button onClick={onClose} className="close-button ">
              
            </button> */}
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
                            src={image}
                            alt={`${title} : ${index}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
