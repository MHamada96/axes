import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./ProjectsViewPage.style.css";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";

export default function ProjectsViewPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const cat = decodeURIComponent(queryParams.get("cat"));

    const [projectData, setprojectData] = useState([]);

    useEffect(() => {
        const fetchProjectTitles = async () => {
            try {
                const response = await fetch(
                    `https://axesdigitalagency.com/strapi/api/projects?filters[category][$eq]=${cat}&populate=*`
                );
                const data = await response.json();
                setprojectData(data.data); // Update the state with fetched project titles
            } catch (error) {
                console.error("Error fetching project titles:", error);
            }
        };

        fetchProjectTitles();
    }, [cat]);

    return (
        <>
            <Nav></Nav>
            <h1>{cat}</h1>
            <div>
                {console.log("CAT DATA: ", projectData)}
                {projectData.map((item, index) => (
                    <h1 key={index}>{item.attributes.title}</h1>
                ))}
            </div>
            <Footer></Footer>
        </>
    );
}
