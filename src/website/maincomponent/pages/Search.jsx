import React, { useEffect, useState } from 'react'
import Auth_user from '../../authentication/Auth_user'
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Search = () => {
  const { http, token } = Auth_user();
  const [product, setProduct] = useState([]); // Change SetProduct to setProduct
  const location = useLocation();
  const [searchParams] = useSearchParams(location.search);
  const query = searchParams.get('query');

  const getProduct = () => {
    http.get(`/products`).then((res) => {
      // Update state with filtered products
      const filtered = res.data.products.data.filter((record) =>
        record.english_name.toLowerCase().includes(query.toLowerCase())
      );
      setProduct(filtered); // Update the product state with filtered data
    });
  };

  useEffect(() => {
    getProduct();
  }, [query]);
  console.log(product);
  const GetproductId = (product_id_param) => {
    console.log("cart" + product_id_param);
    http.get(`/add-to-cart/${product_id_param}`).then((res) => {
    });
    console.log("hi", product_id_param);
  };

  const handleAddToCart = (product_id) => {
    GetproductId(product_id);
  };

  return (
    <div>
 <section className="featured spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Our Product</h2>
                </div>
                <div className="featured__controls">
                  <ul>
                    <li className="active" data-filter="*">
                      All
                    </li>
                    {/* <li data-filter=".categories">Oranges</li>
                    <li data-filter=".fresh-meat">Fresh Meat</li>
                    <li data-filter=".vegetables">Vegetables</li>
                    <li data-filter=".fastfood">Fastfood</li> */}
                  </ul>
                </div>
              </div>
            </div>

            <div className="">
              <div className="row featured__filter bordered">
                {product.map((item,index) => (
                  <div
                    className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat"
                    key={item.product_id}
                  >
                    <div className="featured__item  border border-danger rounded-3">
                      <div
                        className="featured__item__pic set-bg"
                        style={{
                          backgroundImage: `url(${item.product_image})`,
                          border: "1px solid #ccc",
                        }}
                      >
                        <button className="btn btn-primary  text-white">
                          <i className="fa fa-inr"></i>
                          {item.mrp_price - item.sale_price} Off
                        </button>
                        <ul className="featured__item__pic__hover">
                          <li>
                            <a href="#">
                              <i className="fa fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-retweet" />
                            </a>
                          </li>
                          <li>
                            <a to={`/all_prodshop/${item.product_id}`}>
                              {token ? (
                                <button
                                  className="btn"
                                  onClick={() =>
                                    handleAddToCart(item.product_id)
                                  }
                                >
                                  <i className="fa fa-shopping-cart"></i>
                                </button>
                              ) : (
                                <Link to="/login">
                                  <i className="fa fa-shopping-cart"></i>
                                </Link>
                              )}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="featured__item__text">
                        <h6>
                          <a href="#">{item.english_name}</a>
                        </h6>
                        <h5>P.V:${item.point_value}</h5>
                        <h6 class="feature-price">
                          <b>
                            MRP
                            <del className="text-danger">
                              {item.mrp_price}
                            </del>
                            <span className="text-success">
                              {item.sale_price}
                              <small>/only</small>
                            </span>
                          </b>
                        </h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Search