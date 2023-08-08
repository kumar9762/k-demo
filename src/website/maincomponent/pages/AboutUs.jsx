import React from 'react';
import { FaHome } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';



const AboutUs = () => {
  return (
    <div>
      <section
        className="inner-section single-banner set-bg"
        style={{
          backgroundImage: "url('img/breadcrumb.jpg')",
          height: 400,
        }}
      >
        <div className="container text-center">
          <h2>About our company</h2>
          <h4 className="text-white">
            <ul className="breadcrumb">
              <FaHome /> &nbsp;
              <li className="breadcrumb-item">
                <a href="/" className="text-center">
                  Home
                </a>
              </li>
              /<li aria-current="page"> About</li>
            </ul>
          </h4>
        </div>
      </section>

      <section className="inner-section about-company">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <h2>Vishwakarma Super Mart Private Limited</h2>
                <p>
                  Vishwakarma Super Mart Private Limited is a direct selling company that deals with the distribution of a wide range of high-quality, lifestyle products for day-to-day life. Our aim is to deliver the best products directly to our consumers, who form the core of the company. Our networks of registered distributors are trained leaders and representatives who ensure that consumers get the best products, with additional free business opportunity benefits. The profitable opportunities offered have influenced many customers to purchase products from non-retail environments, owing to the expansion of direct selling across the country.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div>
                <img style={{ width: 250 }} src="https://vsmart.ajspire.com/images/about1.png" alt="about" />
              </div>
            </div>
            <div className="col-lg-3">
              <div>
                <img style={{ width: 250 }} src="https://vsmart.ajspire.com/images/about2.png" alt="about" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section className="inner-section about-company">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <h2 style={{ color: 'orangered' }}>Our Vision</h2>
                <p>
                  Vishwakarma Super Mart Private Limited strives hard continuously and constantly to make every individual customer financially self-reliant, economically and socially strong through the self-help team concept.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <h2 style={{ color: 'orangered' }}>Our Mission</h2>
                <p>
                  Vishwakarma Super Mart Private Limited has a vision to create wealth that provides personal, professional, social, financial, and spiritual growth to everyone. We aim to provide the highest level of quality and service possible with respect to the products and services that we offer and strive to create an environment and culture that lends itself to our distributor’s success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-choose">
        <div className="container mt-3 ">
          <div className="row">
            <div className="col-11 col-md-9 col-lg-7 col-xl-6 mx-auto">
              <div className="section-heading">
                <h2 className='text-center text-lg-start' style={{fontSize:'50px'}}>Why People Choose Their Daily Organic Life With Us</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="choose-card">
                <div className="choose-icon">
                  
                 <i class="fa fa-truck text-success" style={{fontSize:'50px'}}></i>
                </div>
                <div className="choose-text">
                  <h4>Free Shipping</h4>
                  <p>VS Mart gives product delivery for all customers free, which is a plus point of ordering.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-card">
                <div className="choose-icon">
                  <i class="fa fa-gift text-success" aria-hidden="true" style={{fontSize:'50px'}}></i>
                </div>
                <div className="choose-text">
                  <h4>Gift Cards</h4>
                  <p>
                    VS Mart gives every customer reward points or savings as their customer type. It makes customers happy and continues to join together as Mart and Card. Gifts are given to customers as reward points.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-card">
                <div className="choose-icon">
                  <i class="fa fa-repeat text-success" style={{fontSize:'50px'}}></i>
                  
                </div>
                <div className="choose-text">
                  <h4>Reward Points</h4>
                  <p>
                    VS Mart gives every customer reward points or savings based on their customer type. It makes customers happy and continues to join together like Mart and Card.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-card">
                <div className="choose-icon">
                  <i className="icofont-support" />
                </div>
                <div className="choose-text">
                <FaMapMarkerAlt style={{fontSize:'50px'}} className='text-success'/>
                  <h4>Easy Return</h4>
                  <p>
                    One major factor that dictates where online shoppers make purchases is whether you have a clear and generous eCommerce returns policy. Studies have shown that solid return policies increase sales without increasing the volume of return.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
