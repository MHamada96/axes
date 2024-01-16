import React, { useState, useEffect } from "react";
import axios from "axios";

import Brand from "../../../components/BrandComponent/Brand";

import "./BrandList.css";

const BrandList = () => {
    const [brands, setBrands] = useState([]);
    const base_url = "https://axesdigitalagency.com/strapi"; // Set your base URL here

    useEffect(() => {
        axios
            .get(`${base_url}/api/brands?populate=*&pagination[pageSize]=1000000`)
            .then((response) => {
                setBrands(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="BrandList">
            {brands.map((brand) => {
                // let x = brand?.attributes?.image?.data?.attributes?.formats?.small?.url;
                // if (!x) {
                //     console.log(brand.attributes.name);
                // }
                return (<Brand
                    key={brand.id}
                    className="Brand"
                    name={brand.attributes.name}
                    imageSrc={`${base_url}${brand.attributes.image.data.attributes.formats.thumbnail.url}`}
                />)
            })}
        </div>
    );
};

export default BrandList;
