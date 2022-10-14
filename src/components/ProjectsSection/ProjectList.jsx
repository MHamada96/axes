import React, { Component } from "react";
import ProjectComponent from "../ProjectComponent/ProjectComponent";
import "./ProjectList.css";

export default class ProjectList extends Component {
    render() {
        return (
            <div className="ProjectList container">
                <ProjectComponent className="project" />
                <ProjectComponent className="project" />
                <ProjectComponent className="project" />
                <ProjectComponent className="project" />
                <ProjectComponent className="project" />
                <ProjectComponent className="project" />
            </div>
        );
    }
}
