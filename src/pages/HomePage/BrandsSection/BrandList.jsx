import React, { Component } from "react";
import Brand from "../../../components/BrandComponent/Brand";
import "./BrandList.css";

export default class BrandList extends Component {
    render() {
        return (
            <div className="BrandList">
                <Brand className="Brand" />
                <Brand className="Brand" />
                <Brand className="Brand" />
                <Brand className="Brand" />
                <Brand className="Brand" />
                <Brand className="Brand" />
            </div>
        );
    }
}
