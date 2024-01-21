import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ProjectComponent.css";
import ProjectDetailsOverlay from "../ProjectDetailsOverlay/ProjectDetailsOverlay";

function ProjectComponent(props) {
    const { title, category, imgURL, urls, id } = props;
    const [overlayOpen, setOverlayOpen] = useState(false);

    const openOverlay = () => {
        setOverlayOpen(true);
    };

    const closeOverlay = (e) => {
        e.stopPropagation();
        setOverlayOpen(false);
    };

    return (
        <div
            className="ProjectComponent container"
            style={{
                backgroundImage: `url(${imgURL})`,
                backgroundSize: "100% 100%",
            }}
            onClick={openOverlay}
        >
            <span className="title_">{title}</span>
            <Link to="#" className="link">
                {category}
            </Link>

            {overlayOpen && (
                <ProjectDetailsOverlay
                    title={title}
                    onClose={closeOverlay}
                    urls={urls}
                    id={id}
                    // Add other necessary props for the overlay
                />
            )}
        </div>
    );
}

export default ProjectComponent;
