import { Carousel } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
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
        {Banner.map((banners) => {
          return (
            <Carousel.Item>
              <img
                style={{ width: "auto", height: "500px" }}
                className="d-block w-100"
                src={banners.slider_image}
                alt="First slide"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
