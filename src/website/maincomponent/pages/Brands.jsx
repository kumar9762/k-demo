import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Brands = () => {
    const [Brand, SetBrand] = useState([]);

    const getBrand = async () => {
        try {
            const response = await fetch('https://vsmart.ajspire.com/api/brands');
            const data = await response.json();
            SetBrand(data.brands);
            console.log(data.brands);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        getBrand();
    }, []);

    return (
        <div>
    <section className="">
        <div className="container">
            <div className="section-title">
                <h2>Brands</h2>
            </div>
            <Carousel interval={2000}>
                {Brand.map((brands, index) => (
                    <Carousel.Item key={index}>
                        <div className="d-flex justify-content-around">
                            {Brand.slice(index, index + 5).map((brands) => (
                                <div key={brands.brand_id} className="d-flex flex-column align-items-center">
                                    <a
                                        className="suggest-card shadow my-2 rounded-circle"
                                        href={`/product-shop/${brands.brand_id}/0`}
                                    >
                                        <img
                                            className="rounded-circle align-center"
                                            style={{ width: "200px", height: "101px" }}
                                            src={brands.brand_banner}
                                            alt="1658902579category.jpg"
                                        />
                                    </a>
                                    <div>
                                        <h6 className="text-center text-bg-success mt-3">
                                            {brands.brand_name}
                                        </h6>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    </section>
</div>

    );
};

export default Brands;
