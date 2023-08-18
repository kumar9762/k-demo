import React from 'react';

const ContactUs = () => {
  return (
    <div>
      {/* Breadcrumb Section Begin */}
      <section className="breadcrumb-sectio set-bg"   style={{
          backgroundImage: "url('img/breadcrumb.jpg')",
          height: 400,marginTop:"200px"
        }}>
        <img src="" alt="breadcrumb" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__tex">
                <h2>Contact Us</h2>
                <div className="breadcrumb__option">
                  <a href="./index.html">Home</a>
                  <span>Contact Us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb Section End */}
      {/* Contact Section Begin */}
      <section className="contact spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
              <div className="contact__widget">
                <span className="icon_phone" />
                <h4>Phone</h4>
                <p>+01-3-8888-6868</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
              <div className="contact__widget">
                <span className="icon_pin_alt" />
                <h4>Address</h4>
                <p>1403 Ganesh Chowk, Rahimatpur Rd, Kodoli, Satara, Maharashtra 415004</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
              <div className="contact__widget">
                <span className="icon_clock_alt" />
                <h4>Open time</h4>
                <p>08:00 am to 10:00 pm</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
              <div className="contact__widget">
                <span className="icon_mail_alt" />
                <h4>Email</h4>
                <p>kumarborate11@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
      {/* Map Begin */}
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4639.855485505239!2d74.0281990622432!3d17.672439355478584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc237c64bbf90dd%3A0x109a482f9710822c!2sVS%20Mart!5e0!3m2!1sen!2sin!4v1690968677796!5m2!1sen!2sin"
          height={500}
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
          title="VS Mart Location"
        />
       
      </div>
      {/* Map End */}
      {/* Contact Form Begin */}
      <div className="contact-form spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact__form__title">
                <h2>Leave Message</h2>
              </div>
            </div>
          </div>
          <form action="#">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <input type="text" placeholder="Your name" />
              </div>
              <div className="col-lg-6 col-md-6">
                <input type="text" placeholder="Your Email" />
              </div>
              <div className="col-lg-12 text-center">
                <textarea
                  placeholder="Your message"
                  defaultValue={''}
                />
                <button type="submit" className="site-btn">
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Contact Form End */}
    </div>
  );
};

export default ContactUs;
