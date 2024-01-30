import React, { useState, useEffect } from "react";
import "./projectDetailsOverlay.style.css";
import closeIMG from "../../assets/close.png";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import ReactPlayer from "react-player";
import {BASE_URL} from "../../config";

export default function ProjectDetailsOverlay(props) {
    let { title, description, images, onClose, urls, id } = props;
    console.log({ title, description, images, onClose, urls, id });

    const [projectData, setProjectData] = useState(null);

    const VideoPlayer = ({ url }) => {
        return <ReactPlayer url={url} controls width="100%" height="50vh" />;
    };

    useEffect(() => {
        const fetchProjectDetails = async () => {
            try {
                if (id !== undefined) {
                    const response = await fetch(
                        `${BASE_URL}/api/projects/${id}?populate=*`
                    );
                    const data = await response.json();
                    setProjectData(data.data);
                    console.log("Fetched project details:", data);
                }
            } catch (error) {
                console.error("Error fetching project details:", error);
            }
        };

        fetchProjectDetails();
    }, [id]);
    if (projectData) {
        title = projectData.attributes.title;
        description = projectData.attributes.description;
        images = projectData.attributes.projectPhotos.data.map(
            (photo) => photo.attributes.url
        );
        urls = projectData.attributes.URL;
        console.debug("parts: ", { title, description, images });
    }
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
                {projectData ? (
                    <ReactMarkdown>
                        {projectData.attributes.description}
                    </ReactMarkdown>
                ) : (
                    <p>Loading project details...</p>
                )}
                <div className="image-list">
                    {images &&
                        images.map((image, index) => (
                            <img
                                key={index}
                                src={BASE_URL + image}
                                alt={`${title} : ${index}`}
                            />
                        ))}
                    {urls &&
                        urls.map((url, index) => (
                            <VideoPlayer key={url.id} url={url.URL} />
                        ))}
                </div>
            </div>
        </div>
    );
}
