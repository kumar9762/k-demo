import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Slide = () => {
    const [Scat, SetScat] = useState([]);

    const getScate = (category_id) => {
        fetch(`https://vsmart.ajspire.com/api/subcategories/${category_id}`).then(res => {
            return res.json();
        }).then(data => {
            SetScat(data.subcategories);
            console.log(data.subcategories  );
        }).catch((error) => {
            console.error("Error fetching data:", error);
        });
    };

    useEffect(() => {
        getScate();
    });
    return (
        <>
            <section className="">
                asdfghjkl;''
                <div className="container">
                    <Carousel interval={4000}>
                        {
                            Scat.map((subcategories) => {
                                return (
                                    <Carousel.Item>
                                        <Carousel.Caption>
                                            <h3 className='text-light text-uppercase font-weight-medium mb-3'>{subcategories.category_name}</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption>
                                        <img
                                            style={{ width: "80%", height: "350px" }}
                                            className="d-block w-100"
                                            // src='https://images.all-free-download.com/images/graphicwebp/a_beautiful_reflection_of_trees_205901.webp'
                                            src={subcategories.category_banner}
                                            alt="First slide"
                                        />

                                    </Carousel.Item>
                                )
                            })
                        }

                    </Carousel>

                    <Carousel interval={4000}>
                        {Scat.map((subcategories, index) => (
                            <Carousel.Item key={index}>
                                <Carousel.Caption>

                                </Carousel.Caption>
                                <div className="d-flex justify-content-around">
                                    {Scat.slice(index, index + 4).map((item) => (
                                        <a
                                            key={subcategories.product_id}
                                            className="suggest-card shadow my-2 rounded-bottom-5  "
                                            href={`/product-shop/${subcategories.product_id}/0`}
                                        >
                                            <img
                                                className=' rounded-pill'
                                                style={{ width: 200, height: 101 }}
                                                src={subcategories.product_image}
                                                alt="1658902579category.jpg"
                                            />
                                            <div >
                                                <h5 className='text-center text-bg-success'>
                                                    {subcategories.subcategory_name}
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
        </>
    )
}

export default Slide