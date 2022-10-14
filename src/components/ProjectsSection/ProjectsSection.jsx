import React, { Component } from "react";
import ProjectList from "./ProjectList";
import "./ProjectsSection.css";

export default class ProjectsSection extends Component {
    render() {
        return (
            <div className="ProjectsSection">
                <ProjectList className="container" />
            </div>
        );
    }
}
