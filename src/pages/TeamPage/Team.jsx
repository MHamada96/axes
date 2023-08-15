import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Team.style.css";

const Team = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const base_url = "https://axesdigitalagency.com/strapi";
    useEffect(() => {
        axios
            .get(`${base_url}/api/team-members?populate=*`)
            .then((response) => {
                setTeamMembers(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div className="Team">
            {teamMembers.map((member) => (
                <div className="teamMember" key={member.id}>
                    <div className="image">
                        <img
                            src={`${base_url}${member.attributes.image.data.attributes.formats.thumbnail.url}`}
                            alt={member.name}
                        />
                    </div>
                    <div className="info">
                        <h4 className="name">{member.attributes.name}</h4>
                        <h5 className="job">{member.attributes.jobType}</h5>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Team;
