import React from "react";
import "./ProjectViewItem.style.css";

export default function ProjectViewItem() {
    return (
        <h1>ProjectViewItem</h1>
        // <div class="Container">
        //     <h1 id="seeour" ngIf="NoPro">
        //         See our top quality
        //     </h1>
        //     <h2 id="popro" ngIf="NoPro">
        //         Popular Projects
        //     </h2>
        //     <div class="bordr"></div>
        //     <div class="con" ngIf="!empty">
        //         <button
        //             class="Card"
        //             ngFor="let Project of filteredData"
        //             click="OpenPopUp(Project.id)"
        //         >
        //             <img
        //                 id="pic"
        //                 src="Project.attributes.projectPhotos.data[0].attributes.url"
        //                 alt=""
        //             />
        //             <h1 id="title">{Project.attributes.title}</h1>
        //         </button>
        //     </div>
        //     <div class="emp" ngIf="empty">
        //         <h1>Sorry,There are no projects yet</h1>
        //     </div>
        // </div>
    );
}
