import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Slider2 from "./pages/Slider2";
import { FaHome } from "react-icons/fa";

const SubCatView = () => {
  let { cat_id, sub_id } = useParams();
  console.log(cat_id);

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
        console.log("hi");
        console.log(data.subcategory_);
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
        <div
          id="header-carousel"
          className="carousel slide align-center"
          data-ride="carousel"
          style={{ marginLeft: "100px" }}
        >
          <div class="carousel-inner">
            <div className="img">
              <img
                src="https://www.consultancy.in/illustrations/news/spotlight/2020-11-01-190144635-food-beverage.jpg"
                style={{
                  height: "500px",
                  width: "1300px",
                  opacity: "0.5",
                  color: "green",
                }}
              />
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div
                  className="container"
                  style={{ paddingBottom: "150px", color: "black" }}
                >
                  <h2>{Category_.category_name}</h2>
                  <h4>
                    {/* <FaHome /> */}
                    <Link to="/" style={{ color: "black" }}>
                      Home
                    </Link>
                    /{SubCategory_.subcategory_name}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                    {Cat.map((cat) => (
                      <ul>
                        <li className="btn btn-danger">
                          <input type="checkbox" />
                          {cat.category_name}
                          {/* {Count.filter((count) =>count.product_category_id == cat.category_id).
                          map((count) => count.cat_count)} */}
                        </li>
                      </ul>
                    ))}
                  </div>
                  <h4>Filter By Brand</h4>
                  <div
                    className="sidebar__item bg-info rounded-2"
                    style={{ maxHeight: "300px", overflowY: "auto" }}
                  >
                    {Brand.map((brand) => (
                      <ul>
                        <li className="btn btn-success">
                          <input type="checkbox" />
                          {brand.brand_name}
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
                    <h2>Sale Off</h2>
                  </div>

                  <div className="row">
                    <Carousel interval={3000}>
                      {Category.map((item, index) => {
                        if (index % 3 === 0) {
                          return (
                            <Carousel.Item key={index}>
                              <div className="row">
                                {Category.slice(index, index + 3).map(
                                  (item, subIndex) => (
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
                                          <div className="product__item__price">
                                            <b>
                                              MRP
                                              <del className="text-danger">
                                                {item.mrp_price}
                                              </del>{" "}
                                              <span className="text-success">
                                                {item.sale_price}
                                                <small>/only</small>
                                              </span>
                                            </b>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                )}
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
                            <span>{Category.length}</span> Products found
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
                    {Category.map((item) => {
                      return (
                        <div className="col-lg-4 col-lg-3 col-md-4 col-sm-4">
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
                              <div className="product__item__price">
                                <b>
                                  MRP
                                  <del className="text-danger">
                                    {item.mrp_price}
                                  </del>{" "}
                                  <span className="text-success">
                                    {item.sale_price}
                                    <small>/only</small>
                                  </span>
                                </b>
                              </div>
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
