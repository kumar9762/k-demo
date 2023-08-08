import { Carousel } from 'react-bootstrap'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Slider = () => {
  const [Banner, SetBanner] = useState([]);
  useEffect(() => {
    fetch('https://vsmart.ajspire.com/api/banners').then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
      SetBanner(data.banners);
    })
  },[]);
  return (
    <div className='container-fluid me-auto'>
      <Carousel >
        {
          Banner.map((banners) => {
            return (
              <Carousel.Item>
                <img
                  style={{ width: "auto", height: "400px" }}
                  className="d-block w-100"
                  src={banners.slider_image}
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

export default Slider