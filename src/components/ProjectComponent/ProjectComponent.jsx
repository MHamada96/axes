import React from "react";
import { Link } from "react-router-dom";
import "./ProjectComponent.css";

function ProjectComponent(props) {
    const { title, category, imgURL } = props;
    console.log(imgURL);
    return (
        <div
            className="ProjectComponent container"
            style={{
                backgroundImage: `url(${imgURL})`,
            }}
        >
            <span className="title">{title}</span>
            <Link to="#" className="link">
                {category}
            </Link>
        </div>
    );
}

export default ProjectComponent;
