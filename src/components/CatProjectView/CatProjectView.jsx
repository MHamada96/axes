import React, { useState, useEffect } from "react";
import "./CatProjectView.style.css";
import ProjectDetailsOverlay from "../ProjectDetailsOverlay/ProjectDetailsOverlay";

export default function CatProjectView(props) {
    // const base_url = "http://77.243.85.19:1337";
    const base_url = "https://axesdigitalagency.com/strapi"; // Set your base URL here

    const { title, thumbImgSrc, id, description, images } = props;

    const [overlayOpen, setOverlayOpen] = useState(false);

    const openOverlay = () => {
        setOverlayOpen(true);
    };

    const closeOverlay = (e) => {
        e.stopPropagation();
        setOverlayOpen(false);
    };

    useEffect(() => {
        console.log("Overlay open state:", overlayOpen);

        return () => {
            console.log("Effect cleanup - Overlay open state:", overlayOpen);
        };
    }, [overlayOpen]);

    return (
        <div className="card" onClick={openOverlay}>
            <img
                className="card-img"
                src={base_url + thumbImgSrc}
                alt="Thumbnail"
            />
            <h2 className="card-title">{title}</h2>

            {overlayOpen && (
                <ProjectDetailsOverlay
                    id={id}
                    title={title}
                    description={description}
                    images={images}
                    onClose={closeOverlay}
                />
            )}
        </div>
    );
}
