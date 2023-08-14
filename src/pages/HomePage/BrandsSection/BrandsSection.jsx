import React, { Component } from "react";
import AndMore from "./AndMore/AndMore";
import BrandList from "./BrandList";
import "./BrandsSection.css";

export default class BrandsSection extends Component {
  render() {
    return (
      <div className="BrandsSection">
        <div className="title container">
          <h1>We Succeded With</h1>
        </div>
        <div className="list container">
          <BrandList />
          <AndMore />
        </div>
      </div>
    );
  }
}
