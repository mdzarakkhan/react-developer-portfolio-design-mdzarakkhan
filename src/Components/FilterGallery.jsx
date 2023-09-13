import React, { useState } from "react";
import './filtergallery.scss';



const FilterGallery = () => {
    const [selectedFilter, setSelectedFilter] = useState("All");

    const filters = ["All", "Ecommerce", "Portfolio", "Business", "Rental", "Blog"];

    const images = {
        All: [
            "https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Website-Designs/mdzarakkhan-portfolio-3",

            "https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Website-Designs/mdzarakkhan-portfolio",

            "https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Website-Designs/overbrains.com",

            "https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Website-Designs/momnme.pk",

            "https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Website-Designs/mdzarakkhan-portfolio-2",

            "https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Website-Designs/agrindtool.com",

            "https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Website-Designs/davidleesbtq.com",

            "https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Website-Designs/fimelen.ch",

            "https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Website-Designs/giosyt.in",

            "https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Website-Designs/nurangi.com",

            "https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Website-Designs/dreamacake.com",
        ],

        Ecommerce: [
            "https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Website-Designs/agrindtool.com",

            "https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Website-Designs/davidleesbtq.com",

            "https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Website-Designs/giosyt.in",

            "https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Website-Designs/momnme.pk",

            "https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Website-Designs/nurangi.com",

            "https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Website-Designs/dreamacake.com",
        ],

        Portfolio: [
            "https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Website-Designs/mdzarakkhan-portfolio-3",

            "https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Website-Designs/mdzarakkhan-portfolio",

            "https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Website-Designs/mdzarakkhan-portfolio-2",

        ],

        Business: [

            "https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Website-Designs/overbrains.com",

        ],
        Rental: [
            
            "https://res.cloudinary.com/dxgj0uw2x/image/upload/f_auto,q_auto/v1/mdzarakkhan.me/Images/Website-Designs/fimelen.ch",

        ],
        Blog: []
    };

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    return (

        <div className="filter-gallery">
            <div className="filter-buttons">
                {filters.map((filter) => (
                    <button
                        className={`btn ${filter === selectedFilter ? 'selected' : ''}`}
                        key={filter}
                        onClick={() => handleFilterChange(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>
            <div className="image-grid">
                {images[selectedFilter].map((image, index) => (
                    <div className="image-container" key={index}>
                        <img className="img-fluid" src={image} alt={`${selectedFilter}-${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterGallery;
