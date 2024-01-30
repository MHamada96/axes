import axios from "axios";
import React, { useState, useEffect } from "react";

import Brand from "../../../components/BrandComponent/Brand";
import { BASE_URL } from "../../../config"; 
import "./BrandList.css";

const BrandList = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        axios
            .get(
                `${BASE_URL}/api/brands?populate=*&pagination[pageSize]=1000000`
            )
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

                return (
                    <Brand
                        key={brand.id}
                        className="Brand"
                        name={brand.attributes.name}
                        imageSrc={`${BASE_URL}${brand.attributes.image.data.attributes.formats.thumbnail.url}`}
                    />
                );
            })}
        </div>
    );
};

export default BrandList;
