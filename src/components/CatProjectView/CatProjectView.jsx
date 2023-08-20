import React from "react";
import "./CatProjectView.style.css";
// import ReactMarkdown from "react-markdown";

export default function CatProjectView(props) {
    const { title, thumbImgSrc, id } = props;
    console.log("ID: ", id);
    return (
        <div className="card">
            <img className="card-img" src={thumbImgSrc} alt="Thumbnail" />
            <h2 className="card-title">{title}</h2>
            {/* <ReactMarkdown className="card-description">
                {description}
            </ReactMarkdown> */}
        </div>
    );
}
