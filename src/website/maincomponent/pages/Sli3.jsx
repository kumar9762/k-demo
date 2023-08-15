import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

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
          <div className='' style={{ backgroundColor: 'rgba(128, 128, 128, 0.5)', borderTopColor: 'red' }}>
            <AliceCarousel
              responsive={{
                0: { items: 1, margin: 10 },
                576: { items: 2, margin: 15 },
                768: { items: 3, margin: 20 },
                992: { items: 4, margin: 25 },
                1200: { items: 5, margin: 30 },
              }}
              autoPlay
              autoPlayInterval={2000}
              infinite
              disableDotsControls
              disableButtonsControls
            >
              {Sli2.map((category, index) => (
                <div key={index} className="d-flex justify-content-around col-lg-12 col-md-6 col-sm-6">
                  <a
                    key={category.category_id}
                    className="suggest-card shadow my-2"
                    href={`/product-shop/${category.category_id}/0`}
                    style={{ borderRadius: '10px' }}
                  >
                    <img
                      className="rounded"
                      style={{ width: 200, height: 101 }}
                      src={category.category_banner}
                      alt="1658902579category.jpg"
                    />
                    <div>
                      <button className="text-center btn text-bg-success w-100" style={{ opacity: 0.7 }}>
                        {category.category_name}
                        <br />
                      </button>
                    </div>
                  </a>
                </div>
              ))}
            </AliceCarousel>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sli3;
