import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';

const BrandDetail = () => {
  const [Brands,SetBrands]=useState([]);

  const GetBrands=()=>{
    fetch(`https://vsmart.ajspire.com/api/product-shop/${cat_id}/${sub_id}`).then(res=>{
      return res.json();
    }).then(data=>{
      SetBrands()
    })
  }
  return (
    <div>
        <>
      <section className="">
        <div className="container">
        <Carousel interval={4000}>
        {
          Brands.map((brands) => {
            return (
              <Carousel.Item>
              <Carousel.Caption>
          <h3 className='text-light text-uppercase font-weight-medium mb-3'>{item.brand_name}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
                <img
                  style={{ width: "80%", height: "350px" }}
                  className="d-block w-100"
                  // src='https://images.all-free-download.com/images/graphicwebp/a_beautiful_reflection_of_trees_205901.webp'
                  src={brand.brands_image}
                  alt="First slide"
                />
               
              </Carousel.Item>
            )
          })
        }

      </Carousel>

         <div className=''>
         <Carousel interval={4000}>
            {Sli2.map((item, index) => (
              <Carousel.Item key={index}>
                <Carousel.Caption>
                
                </Carousel.Caption>
                <div className="d-flex justify-content-around">
                  {Sli2.slice(index, index + 4).map((item) => (
                    <a
                      key={item.product_id}
                      className="suggest-card shadow my-2 rounded-bottom-5  "
                      href={`/product-shop/${item.product_id}/0`}
                    >
                      <img
                        className=' rounded-pill'
                        style={{ width: 200, height: 101 }}
                        src={item.product_image}
                        alt="1658902579category.jpg"
                      />
                      <div >
                        <h5 className='text-center text-bg-success'>
                          {item.english_name }
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
        </div>
      </section>
    </> 
    </div>
  )
}

export default BrandDetail