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
                    "http://77.243.85.19:1337/api/projects?populate=*"
                );
                const data = await response.json();
                setProjects(data.data);
                setLoading(false);
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
            <h1>===========</h1>
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
                                "http://77.243.85.19:1337" +
                                project.attributes.projectPhotos.data[0]
                                    .attributes.formats.thumbnail.url
                            }
                        />
                    ))
                )}
            </div>
        </>
    );
}

export default ProjectList;
