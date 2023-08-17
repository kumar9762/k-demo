import React, { useEffect, useState } from 'react'
import Auth_user from '../../authentication/Auth_user';

const Products = () => {
  const { http, user } = Auth_user();
  const [product, setproduct] = useState([]);
  // const[Cat,SetCat]=useState([]);
  const getProd = () => {
    http.get(`/products`).then((res) => {
      if (Array.isArray(res.data.products)) {
        setproduct(res.data.products);
      } else {
        console.error("API response is not an array:", res.data.products);
      }
    });
  };
  

  useEffect(() => {
    getProd();
  }, []);
  return (
    <div>
      <div>
       
        {/* Featured Section Begin */}

        <section className="featured spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Our Product</h2>
                </div>
                <div className="featured__controls">
                  <ul>
                    <li className="active" data-filter="*">All</li>
                    {/* <li data-filter=".categories">Oranges</li>
                    <li data-filter=".fresh-meat">Fresh Meat</li>
                    <li data-filter=".vegetables">Vegetables</li>
                    <li data-filter=".fastfood">Fastfood</li> */}
                  </ul>
                </div>
              </div>
            </div>

            <div className=''>
              <div className="row featured__filter bordered">
                {product.slice(0, 20).map((item) => (
                  <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat" key={item.id}>
                    <div className="featured__item  border border-danger rounded-3">
                      <div className="featured__item__pic set-bg" style={{
                        backgroundImage: `url(${item.product_image})`,
                        border: '1px solid #ccc'
                      }}>
                      <button className='btn btn-primary  text-white'><i className='fa fa-inr'></i>{item.mrp_price-item.sale_price} Off</button>
                        <ul className="featured__item__pic__hover">
                          <li><a href="#"><i className="fa fa-heart" /></a></li>
                          <li><a href="#"><i className="fa fa-retweet" /></a></li>
                          <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                        </ul>
                      </div>
                      <div className="featured__item__text">
                        <h6><a href="#">{item.english_name}</a></h6>
                        <h5>P.V:${item.point_value}</h5>
                        <h6 class="feature-price">
                         <b> MRP<del className='text-danger'>{item.mrp_price}</del>  <span className='text-success'>{item.sale_price}<small>/only</small></span></b>
                        </h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>
        {/* Featured Section End */}
      </div>

    </div>
  )
}

export default Products