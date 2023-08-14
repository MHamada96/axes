import React, { useState, useEffect } from "react";
import axios from "axios";

import Brand from "../../../components/BrandComponent/Brand";

import "./BrandList.css";

const BrandList = () => {
  const [brands, setBrands] = useState([]);
  const base_url = "http://77.243.85.19:1337"; // Set your base URL here

  useEffect(() => {
    axios
      .get(`${base_url}/api/brands?populate=*`)
      .then((response) => {
        setBrands(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="BrandList">
      {brands.map((brand) => (
        <Brand
          key={brand.id}
          className="Brand"
          name={brand.attributes.name}
          imageSrc={`${base_url}${brand.attributes.image.data.attributes.formats.thumbnail.url}`}
        />
      ))}
    </div>
  );
};

export default BrandList;
