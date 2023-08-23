import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PuffLoader } from "react-spinners"; // Import the spinner component

import "./ProjectsCatViewPage.style.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import CatProjectView from "../../components/CatProjectView/CatProjectView";

export default function ProjectsCatViewPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const cat = decodeURIComponent(queryParams.get("cat"));

    const [projectData, setProjectData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjectTitles = async () => {
            try {
                const response = await fetch(
                    `https://axesdigitalagency.com/strapi/api/projects?filters[category][$eq]=${cat}&populate=*`
                );
                const data = await response.json();

                const duplicatedData = data.data.concat(data.data);
                setProjectData(duplicatedData);
            } catch (error) {
                setError("Error fetching project titles");
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjectTitles();
    }, [cat]);

    return (
        <>
            <Nav />
            {isLoading ? (
                <div className="spinner-container">
                    <PuffLoader color={"blue"} loading={isLoading} size={100} />
                </div>
            ) : error ? (
                <div>{error}</div>
            ) : (
                <>
                    <div className="titles-container">
                        <h1>See our top quality</h1>
                        <h2>Popular Projects</h2>
                    </div>
                    <div className="view-container">
                        {projectData.map((item, index) => (
                            <CatProjectView
                                key={index}
                                id={item.id}
                                title={item.attributes.title}
                                thumbImgSrc={
                                    item.attributes.projectPhotos.data[0]
                                        .attributes.formats.thumbnail.url
                                }
                                description={item.attributes.description}
                                images={item.attributes.projectPhotos.data.map(
                                    (photo) => photo.attributes.url
                                )}
                            />
                        ))}
                    </div>
                </>
            )}
            <Footer />
        </>
    );
}
