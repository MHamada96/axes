import React, { Component } from "react";
import Service from "../../../components/ServiceComponent/Service";
import data from "../../../db/services.json";
export default class ServiceList extends Component {
    state = {
        services: [],
    };
    componentDidMount() {
        this.setState({ services: data });
        console.log(data);
    }
    render() {
        const { services } = this.state;

        return (
            <div className="services container">
                {services.map((element) => {
                    return (
                        <Service
                            title={element.title}
                            body={element.body}
                            key={Math.random()}
                            cat={element.cat}
                        />
                    );
                })}
            </div>
        );
    }
}
