import React, { useState, useEffect } from "react";
import ProjectComponent from "../ProjectComponent/ProjectComponent";
import "./ProjectList.css";
import { BASE_URL } from "../../config";

function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    `${BASE_URL}/api/projects?populate=*&pagination[pageSize]=1000000`
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
                                BASE_URL +
                                project.attributes.projectPhotos.data[0]
                                    .attributes.formats.medium.url
                            }
                            urls={project.attributes.URL}
                        />
                    ))
                )}
            </div>
        </>
    );
}

export default ProjectList;
