import { Carousel } from 'react-bootstrap'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const CatSlider = () => {
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
    <div className='container-fluid'>
      <Carousel interval={2000}>
        {
          Sli2.map((category) => {
            return (
              <Carousel.Item>
              <Carousel.Caption>
          <h3 className='text-bg-danger'>{category.category_name}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
                <img
                  style={{ width: "80%", height: "350px" }}
                  className="d-block w-100"
                  src={category.category_banner}
                  alt="First slide"
                />
               
              </Carousel.Item>
            )
          })
        }

      </Carousel>
    </div>
  )
}

export default CatSlider