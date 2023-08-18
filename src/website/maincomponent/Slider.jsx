import { Carousel } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Auth_user from "../authentication/Auth_user";

const Slider = () => {
  const { http, user } = Auth_user();
  const [Banner, SetBanner] = useState([]);

  const getBanner = () => {
    http.get(`/banners`).then((res) => {
      SetBanner(res.data.banners);
    });
  };

  useEffect(() => {
    getBanner();
  }, []);

  return (
    <div className="container-fluid me-auto">
      <Carousel>
        {Banner.map((banner, index) => ( // Added 'index' as the second parameter
          <Carousel.Item key={index}> 
            <img
              style={{ width: "auto", height: "500px" }}
              className="d-block w-100"
              src={banner.slider_image} 
              alt={`Slide ${index}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
