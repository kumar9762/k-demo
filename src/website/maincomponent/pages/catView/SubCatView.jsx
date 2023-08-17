import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Carousel } from "react-bootstrap";

const SubCatView = () => {
  let { cat_id, sub_id } = useParams();

  //Product
  const [Category, setCategory] = useState([]);
  const [Category_, setCategory_] = useState([]);
  const [SubCategory_, setSubCategory_] = useState([]);
  const [Cat, setCat] = useState([]);
  const [Brand, setBrand] = useState([]);
  const [Sub, setSub] = useState([]);
  const [Count, setCount] = useState([]);
  const [Count1, setCount1] = useState([]);

  const getSubCat = () => {
    fetch(` https://vsmart.ajspire.com/api/product-shop/${cat_id}/${sub_id}`)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.categories);
        setCategory(data.category.data);
        setCategory_(data.category_);
        setSubCategory_(data.subcategory_);
        setCat(data.cat);
        setBrand(data.brand);
        setSub(data.sub);
        setCount(data.count);
        setCount1(data.count1);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  useEffect(() => {
    getSubCat();
  }, []);

  return (
    <>
      <div>
        {/* <CatSlider /> */}
        <Slider2 />

        <div className="container-fluid"></div>
        {/* Breadcrumb Section Begin */}
        {/* <section className="breadcrumb-section set-bg" style={{ backgroundImage: "url('img/background.jpg')" }}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="breadcrumb__text">
            <h2>Organi Shop</h2>
            <div className="breadcrumb__option">
              <a href="./index.html">Home</a>
              <span>Shop</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}
        {/* Breadcrumb Section End */}
        {/* Product Section Begin */}
        <section className="product spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-5">
                <div className="sidebar border-1">
                  <h4>Filter By Category</h4>
                  <div
                    className="sidebar__item bg-warning rounded-2 text-bg-success"
                    style={{ maxHeight: "300px", overflowY: "auto" }}
                  >
                    {Category.map((category) => (
                      <ul>
                        <li className="btn btn-danger">
                          <input type="checkbox" />
                          {category.category_name}
                        </li>
                      </ul>
                    ))}
                  </div>
                  <h4>Filter By Brand</h4>
                  <div
                    className="sidebar__item bg-info rounded-2"
                    style={{ maxHeight: "300px", overflowY: "auto" }}
                  >
                    {Category.map((category) => (
                      <ul>
                        <li className="btn btn-success">
                          <input type="checkbox" />
                          {category.category_name}
                        </li>
                      </ul>
                    ))}
                  </div>

                  <div className="sidebar__item">
                    <div className="latest-product__text">
                      <h4>Latest Products</h4>
                      <div className="latest-product__slider ">
                        <div className="latest-prdouct__slider__item">
                          <a href="#" className="latest-product__item">
                            <div className="latest-product__item__pic">
                              <img src="img/latest-product/lp-1.jpg" alt />
                            </div>
                            <div className="latest-product__item__text">
                              <h6>Crab Pool Security</h6>
                              <span>$30.00</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-7 ps-1">
                <div className="product__discount">
                  <div className="section-title product__discount__title">
                    <h2>Sale Offasdfghjkl;</h2>
                  </div>

                  <div className="row">
                    <Carousel interval={3000}>
                      {product.map((item, index) => {
                        if (index % 3 === 0) {
                          return (
                            <Carousel.Item key={index}>
                              <div className="row">
                                {product
                                  .slice(index, index + 3)
                                  .map((item, subIndex) => (
                                    <div
                                      className="col-lg-4 col-lg-3 col-md-4 col-sm-4"
                                      key={index + subIndex}
                                    >
                                      <div className="product__discount__item">
                                        <div
                                          className="product__discount__item__pic set-bg"
                                          data-setbg="img/product/discount/pd-1.jpg"
                                          style={{
                                            backgroundImage: `url(${item.product_image})`,
                                            border: "1px solid #ccc",
                                            width: "300px",
                                          }}
                                        >
                                          <div className="product__discount__percent">
                                            {item.mrp_price - item.sale_price}
                                          </div>
                                          <ul className="product__item__pic__hover">
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
                                              <a href="#">
                                                <i className="fa fa-shopping-cart" />
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="product__discount__item__text">
                                          <span>{item.category_name}</span>
                                          <h5>
                                            <a href="#">{item.english_name}</a>
                                          </h5>
                                          <h6 class="feature-price">
                                                    <b> MRP<del className='text-danger'>{item.mrp_price}</del>  <span className='text-success'>{item.sale_price}<small>/only</small></span></b>
                                                </h6>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                              </div>
                            </Carousel.Item>
                          );
                        }
                        return null;
                      })}
                    </Carousel>
                  </div>
                  <div className="filter__item">
                    <div className="row">
                      <div className="col-lg-4 col-md-5">
                        <div className="filter__sort">
                          <span>Sort By</span>
                          <select>
                            <option value={0}>Default</option>
                            <option value={0}>Default</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="filter__found">
                          <h6>
                            <span>{product.length}</span> Products found
                          </h6>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-3">
                        <div className="filter__option">
                          <span className="icon_grid-2x2" />
                          <span className="icon_ul" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {product.map((item) => {
                      return (
                        <div className="col-lg-4 col-md-6 col-sm-6">
                          <div className="product__item">
                            <div
                              className="product__item__pic set-bg"
                              data-setbg="img/product/product-1.jpg"
                              style={{
                                backgroundImage: `url(${item.product_image})`,
                                border: "1px solid #ccc",
                              }}
                            >
                              <ul className="product__item__pic__hover">
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
                                  <a href="#">
                                    <i className="fa fa-shopping-cart" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="product__item__text">
                              <h6>
                                <a href="#">{item.product_name}</a>
                              </h6>
                              <h5>{item.mrp_price}</h5>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="product__pagination">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">
                      <i className="fa fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Product Section End */}
      </div>
    </>
  );
};

export default SubCatView;
