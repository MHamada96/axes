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
                    "https://axesdigitalagency.com/strapi/api/projects?populate=*"
                );
                const data = await response.json();
                setProjects(data.data);
                setLoading(false);
                console.log("======================================");
                console.log(data.data);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div className="ProjectList container">
                {loading ? (
                    <p>Loading projects...</p>
                ) : (
                    projects.map((project) => (
                        <ProjectComponent
                            key={project.id}
                            className="project"
                            title={project.attributes.title}
                            category={project.attributes.category}
                            imgURL={
                                "https://axesdigitalagency.com/strapi" +
                                project.attributes.projectPhotos.data[0]
                                    .attributes.formats.medium.url
                            }
                        />
                    ))
                )}
            </div>
        </>
    );
}

export default ProjectList;
