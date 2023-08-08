import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Sli3 = () => {
    const [Sli2, SetSli2] = useState([]);

    const getSlid2 = async () => {
        try {
            const response = await fetch('https://vsmart.ajspire.com/api/categories');
            const data = await response.json();
            SetSli2(data.categories);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    useEffect(() => {
        getSlid2();
    }, []);

    return (
        <div>
            <section className="">
                <div className="container">
                    <div className="section-title">
                        <h2>Categories</h2>
                    </div>
                    <Carousel interval={2000}>
                        {Sli2.map((category, index) => (
                            <Carousel.Item key={index}>
                                <div className="d-flex justify-content-around col-lg-12 col-md-6 col-sm-6 ">
                                    {Sli2.slice(index, index + 4).map((category) => (
                                        <a
                                            key={category.category_id}
                                            className="suggest-card shadow my-2 rounded-bottom-5  "
                                            href={`/product-shop/${category.category_id}/0`}
                                        >
                                            <img
                                                className=' rounded-pill'
                                                style={{ width: 200, height: 101 }}
                                                src={category.category_banner}
                                                alt="1658902579category.jpg"
                                            />
                                            <div >
                                                <h5 className='text-center text-bg-success'>
                                                    {category.category_name}
                                                    <br />

                                                </h5>
                                            </div>
                                        </a>
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

export default Sli3;
