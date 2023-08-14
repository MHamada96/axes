import React from "react";
import "./Brand.css";

const Brand = ({ name, imageSrc }) => (
  <div className="Brand">
    <div className="image">
      <img src={imageSrc} alt={name} />
    </div>
    <div className="info">
      <h3 className="name">{name}</h3>
    </div>
  </div>
);

export default Brand;
