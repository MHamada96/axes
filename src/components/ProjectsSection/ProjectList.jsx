import React, { useState, useEffect } from "react";
import ProjectComponent from "../ProjectComponent/ProjectComponent";
import "./ProjectList.css";

function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    "https://axesdigitalagency.com/strapi/api/projects?populate=*&pagination[pageSize]=1000000"
                );
                const data = await response.json();
                setProjects(data.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const openOverlay = () => {
        // You can implement the logic to open the overlay here
        console.log("Overlay opened!");
    };

    const closeOverlay = () => {
        // You can implement the logic to close the overlay here
        console.log("Overlay closed!");
    };

    return (
        <>
            <div className="ProjectList container">
                {loading ? (
                    <p>Loading projects...</p>
                ) : (
                    projects.map((project) => (
                        <ProjectComponent
                            key={project.id}
                            id={project.id}
                            className="project"
                            title={project.attributes.title}
                            category={project.attributes.category}
                            imgURL={
                                "https://axesdigitalagency.com/strapi" +
                                project.attributes.projectPhotos.data[0]
                                    .attributes.formats.medium.url
                            }
                            urls={project.attributes.URL}
                            openOverlay={openOverlay}
                            closeOverlay={closeOverlay}
                        />
                    ))
                )}
            </div>
        </>
    );
}

export default ProjectList;
